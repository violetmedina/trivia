import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import correctAnswer from '../actions/correctAnswer';
import Card from './Card';
import './main.css'
import he from 'he'


const Game = ({ value, text }) => {

    // receive info from API from parent component, Categories, then display Q and A, A in random order

    const [triviaData, setTriviaData] = useState([])
    const [pickedAnswer, setPickedAnswer] = useState("")
    const [pickedQuestion, setPickedQuestion] = useState("")

    const answersDisplay = useSelector(state => state.answerReducer.answers)
    const cAnswer = useSelector(state => state.answerReducer.cAnswer)

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

    const handleAnswer = (e, answer) => {
        e.preventDefault();
        setPickedAnswer(answer)
        dispatch(correctAnswer(cAnswer, answer))
    }

    // shuffleArray(answersDisplay)

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function determineAnswer(pickedAnswer, cAnswer) {
        console.log("Correct Answer:", cAnswer)
        console.log("Selected Answer:", pickedAnswer)
        {if(pickedAnswer === cAnswer){ //set a value for correct to create the X or O
            return "CORRECT!"
        }
        else {
            return "INCORRECT!"
        }}
    }

    return (
        <>
            <br/><h2>Selected Category: {text}</h2>

            <div className="container">
                <div className="row">
                    {triviaData.map((question, index) => {
                        return (
                            <div id="cards" className="col-4 d-flex flex-wrap justify-content-center">
                                <Card question={question} index={index}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container"><br />
                <h5 className='row'>Selected Question: {he.decode(pickedQuestion)}</h5><br />
                Answers:
                <div className="row">
                    {answersDisplay.map((answer, index) => {
                        return (
                            <div className='col-6'>
                                <a href='#' key={index} onClick={(e) => handleAnswer(e, answer)}>{index + 1}. {he.decode(answer)}</a>
                            </div>
                        )
                    })
                    }
                </div>

            <div>
                Your Answer: {he.decode(pickedAnswer)}<br/>
                {determineAnswer(pickedAnswer, cAnswer)}
            </div>
            </div>

        </>
    )
}

export default Game