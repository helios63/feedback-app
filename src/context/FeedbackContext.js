import { v4 as uuidv4} from "uuid"
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Text text',
            rating: 10
        },
        {
            id: 2,
            text: 'Text text Text Text',
            rating: 9
        },
        {
            id: 3,
            text: 'Text text Text Texxxxxxt',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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

    // EDIT FEEDBACK
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext