import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Answer from './Answer';
import './main.css';
import he from 'he';

const Game = ({ value, text }) => {

    // receive info from API from parent component, Categories, then display Q and A, A in random order
    const [triviaData, setTriviaData] = useState([])
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [showAnswers, setShowAnswers] = useState(true);

    const answersArr = useSelector(state => state.answerReducer.answers)
    const cAnswer = useSelector(state => state.answerReducer.cAnswer)

    console.log(answersArr)
    console.log(shuffledAnswers)
    console.log(cAnswer)

    useEffect(() => {

        const triviaData = async () => {
            let url = `https://opentdb.com/api.php?amount=9&category=${value}&type=multiple`
            let response = await fetch(url)
            let data = await response.json();
            setTriviaData(data.results)
        }
        triviaData()
    }, [])

    useEffect(() => {

        setShuffledAnswers(shuffleArray(answersArr))
        setShowAnswers(true);

    }, [answersArr])


    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // const handleShowAnswers = () => setShowAnswers(false);

    return (
        <>
            <br /><h2>Selected Category: <b>{text}</b></h2>
            <h2>Click on a Card... Answer Below.<br/> Make A Tic-Tac-Toe to Win!</h2>
            <h4>Correct answers mark the card 'O' <br/> Incorrect answers mark the card with an 'X'.</h4>
            <br/><h1>Three 'O's Wins!</h1>

            <div className="container">
                <div className="row">
                    {triviaData.map((question, index) => {
                        return (
                            <div key={index} id="cards" className="col-4 d-flex flex-wrap justify-content-center">
                                <Card question={question} index={index}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container"
            // onClick={handleShowAnswers}
            ><br />
                <h5>
                    <div className="row">
                        {showAnswers ? <DisplayAnswers answersArr={answersArr} setShowAnswers={setShowAnswers}/> : null}
                    </div>
                </h5>

                <h5>
                    <div><a href='/'>Reset Game</a></div>
                </h5>
            </div>
            <br /><br /><br /><br />
        </>
    ) //end of return
} //end of function Game

const DisplayAnswers = ({answersArr, setShowAnswers}) => {
    return (
        <>
        <div>Answers:</div><br/><br/>
        {answersArr !== undefined
            ?
            answersArr.map((answer, index) => {
                return (
                    <div key={index} className='col-6'>
                        <div>
                            <Answer answer={he.decode(answer)} index={index} setShowAnswers={setShowAnswers} />
                            {/* {showAnswers ? <DisplayAnswers answer={answer} index={index}/> : null} */}
                        </div>
                    </div>
                )
            })
            : ""
        }
        </>
    )}
export default Game