import React from 'react'
import { useSelector } from 'react-redux'
import he from 'he'

const Reveal = () => {

    const pickedAnswer = useSelector(state => state.answerReducer.pickedAnswer)
    const isCorrect = useSelector(state => state.answerReducer.isCorrect)
    const cAnswer = useSelector(state => state.answerReducer.cAnswer)

    return (
        <>
            <div>
                Your Answer is: {he.decode(pickedAnswer)}<br />
                Correct Answer is: {he.decode(cAnswer)}<br/>
                <b>{isCorrect === "yes" ? "CORRECT! O marks the spot!" : "INCORRECT... X marks the spot."}</b> <br />
                Please select another card...
                <br /><br />
            </div>
        </>
    )
}

export default Reveal