import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import combineAnswers from '../actions/answersAction';
import './main.css'
import he from 'he'

const Card = ({ question, index }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const amICorrect = useSelector(state => state.answerReducer.boardState[index])

    const dispatch = useDispatch();
    const gameSection = useRef(null)

    useEffect(() => {
        scrollDown()
    }, [])

    const scrollDown = () => {
        window.scrollTo({
            top: gameSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const handleQuestion = (e, ca, ia, index) => {
        e.preventDefault();
        dispatch(combineAnswers(ia, ca, index));
    }

    const flipCard = (e) => {
        setIsFlipped(true)
        handleQuestion(e, question.correct_answer, question.incorrect_answers, index)
    }

    return (
        <>
        <div ref={gameSection}></div>
            <div id="card" className="card" disabled={true}>
                <div onClick={(e) => flipCard(e)} className={isFlipped ? "card__inner is-flipped" : "card__inner"}>
                    {/* <!-- front of card --> */}
                    <div className="card__face card__face--front"></div>
                    {/* <!-- back of card --> */}
                    <div className="card__face card__face--back">
                        <div className={
                            amICorrect[0] === false
                                ?
                                "card__content"
                                :
                                amICorrect[1] === 'default'
                                    ?
                                    "card__content"
                                    :
                                    amICorrect[1] === "yes"
                                        ?
                                        "card__content is-o"
                                        :
                                        "card__content is-x"
                        }>
                            <div id="questionDetails">
                                <b>{he.decode(question.question)}</b>
                                {/* {console.log((index+1), question.question)} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card