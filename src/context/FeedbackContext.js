import { v4 as uuidv4} from "uuid"
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // FETCH FEEDBACK
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // ADD FEEDBACK
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // DELETE FEEDBACK
    const deleteFeedback = (id) => {
        if (window.confirm('Delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // UPDATE FEEDBACK
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }

    // EDIT FEEDBACK
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext