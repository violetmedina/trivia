import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import combineAnswers from '../actions/answersAction';
import correctAnswer from '../actions/correctAnswer';
import he from 'he'


const Game = ({ value, text }) => {

    // receive info from API from parent component, Categories, then display Q and A, A in random order

    const [triviaData, setTriviaData] = useState([])
    const [cAnswer, setCAnswer] = useState([])
    const [iAnswers, setIAnswers] = useState([])
    const [pickedAnswer, setPickedAnswer] = useState('')

    const answersDisplay = useSelector(state => state.answerReducer.answers)

    useEffect(() => {

        const triviaData = async () => {
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
        setCAnswer(ca);
        setIAnswers(ia);
        dispatch(combineAnswers(iAnswers, cAnswer));
    }

    console.log(triviaData)
    console.log(answersDisplay)

    const handleAnswer = (e, answer) => {
        e.preventDefault();
        setPickedAnswer(answer)
        dispatch(correctAnswer(cAnswer, answer))
    }

    shuffleArray(answersDisplay)

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    return (
        <>
            <h2>Selected Category: {text}</h2>
            Questions:
                {triviaData.map((question, index) => {
                    return (
                        <ul>
                            <div id="questionDetails" key={index}>
                                <a href='#' onClick={(e) => handleClick(e, question.correct_answer, question.incorrect_answers)}>
                                {he.decode(question.question)}
                                </a>
                            </div><br/>
                        </ul>
                    )
                })}<br></br>
            Answers:
                {answersDisplay.map((answer, index) => {
                    //call function to randomize answers
                    return (
                    <div>
                        <ul key={index}><a href='#' onClick={(e) => handleAnswer(e, answer)}>{answer}</a></ul>
                    </div>
                    )
                })
                }

            </>
    )
}

            export default Game