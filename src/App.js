import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App () {
    const [feedback, setFeedback] = useState()

    return (
        <>
        <Header text={'Feedback UI'} />
        <div className="container">
            <FeedbackItem/>
        </div>
        </>
    )
}

export default App