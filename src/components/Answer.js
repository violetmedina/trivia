import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import correctAnswer from '../actions/correctAnswer';
import Reveal from './Reveal';
import Hide from './Hide';
import Button from 'react-bootstrap/Button';
import './main.css'
import he from 'he'

const Answer = ({answer, index}) => {

    const answersDisplay = useSelector(state => state.answerReducer.answers)
    const cAnswer = useSelector(state => state.answerReducer.cAnswer)
    const pickedAnswer = useSelector(state => state.answerReducer.pickedAnswer)
    const isCorrect = useSelector(state => state.answerReducer.isCorrect)

    const dispatch = useDispatch();

    const [showAnswer, setShowAnswer] = useState(false)

    const handleAnswer = (e, answer) => {
        e.preventDefault();
        determineAnswer(cAnswer, answer);
        onClick();
      }

      function determineAnswer(cAnswer, answer) {
        console.log("Correct Answer:", cAnswer);
        console.log("Selected Answer:", answer);
        dispatch(correctAnswer(cAnswer, answer));
    }

    const onClick = () => setShowAnswer(!showAnswer);

    return (
      <>

        <form className='d-flex flex-column'>
          <Button variant="dark" onClick={(e) => handleAnswer(e, answer)}>{index +1}. {he.decode(answer)}</Button>{' '}
        </form>
        <br></br>
        {showAnswer ? <RevealAnswer /> : <Hide />}
    </>

)
}

const RevealAnswer = () => <Reveal/>;

export default Answer;