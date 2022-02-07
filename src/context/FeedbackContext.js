import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Text text',
            rating: "10"
        }
    ])

    return <FeedbackContent.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContent.Provider>
}

export default FeedbackContext