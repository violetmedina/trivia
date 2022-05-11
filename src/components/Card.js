import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import combineAnswers from '../actions/answersAction';
import './main.css'
import he from 'he'

const Card = ({question}, index) => {

    const [cAnswer, setCAnswer] = useState([])
    const [pickedQuestion, setPickedQuestion] = useState("")
    const [isFlipped, setIsFlipped] = useState(false)

    const dispatch = useDispatch();

    const handleQuestion = (e, ca, ia, que) => {
        e.preventDefault();
        setPickedQuestion(que);
        setCAnswer(ca);
        dispatch(combineAnswers(ia, ca));

    }

    const flipCard = (e) => {
        setIsFlipped(true)
        handleQuestion(e, question.correct_answer, question.incorrect_answers, question.question)
    }

    return (

    <>

        <div id="card" className="card">
            <div onClick={(e) => flipCard(e)} className={isFlipped ? "card__inner is-flipped" : "card__inner"}>
                {/* <!-- front of card --> */}
                    <div className="card__face card__face--front"></div>
                {/* <!-- back of card --> */}
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div id="questionDetails" key={index}>
                                <b>{he.decode(question.question)}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Card