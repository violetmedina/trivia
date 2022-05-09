import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import combineAnswers from '../actions/answersAction';

const Game = ({ value, text }) => {

    // receive info from API from parent component, Categories, then display Q and A, A in random order

    const [triviaData, setTriviaData] = useState([])
    const [cAnswer, setCAnswer] = useState([])
    const [iAnswers, setIAnswers] = useState([])

    useEffect(() => {

        const triviaData = async () => {
            console.log(value)
            console.log(text)
            let url = `https://opentdb.com/api.php?amount=9&category=${value}&type=multiple`

            let response = await fetch(url)
            let data = await response.json();
            setTriviaData(data.results)
        }

        triviaData()
    }, [])

    const dispatch = useDispatch();

    const handleClick = (e, ca, ia) => {
        e.preventDefault();
        setCAnswer(ca)
        setIAnswers(ia)
        dispatch(combineAnswers(iAnswers, cAnswer))
    }
    console.log()


    return (
        <>
            <h2>Selected Category: {text}</h2>

                {triviaData.map((question, index) => {
                    return (
                        <div id="questionDetails" key={index}>
                            <a href='#' onClick={(e) => handleClick(e, question.correct_answer, question.incorrect_answers)}>{question.question}</a><br/>
                                {/* <ul>{question.incorrect_answers.map(ia => ia)}</ul> */}

                        </div>
                    )
                })}
            </>
    )
}

            export default Game