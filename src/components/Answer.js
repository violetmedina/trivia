import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import correctAnswer from '../actions/correctAnswer';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './main.css'
import he from 'he'

const Answer = ({ answer, index, setShowAnswers }) => {

  const cAnswer = useSelector(state => state.answerReducer.cAnswer)
  const pickedAnswer = useSelector(state => state.answerReducer.pickedAnswer)
  const isCorrect = useSelector(state => state.answerReducer.isCorrect)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false); //to close the modal
    setShowAnswers(false);
  }

  const handleShow = () => setShow(true); //to pop up the modal

  const dispatch = useDispatch();

  const handleAnswer = (e, answer) => {
    e.preventDefault();
    determineAnswer(cAnswer, answer);
    handleShow();
  }

  function determineAnswer(cAnswer, answer) {
    console.log("Correct Answer:", cAnswer);
    console.log("Selected Answer:", answer);
    dispatch(correctAnswer(cAnswer, answer));
  }


  return (
    <>

      <form className='d-flex flex-column'>
          <Button variant="dark" onClick={(e) => handleAnswer(e, answer)}>{index +1}. {answer}</Button>{' '}
        </form>
        <br></br>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isCorrect === "yes" ? "CORRECT! O marks the spot!" : "INCORRECT... X marks the spot."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Your Answer is:</b> {he.decode(pickedAnswer)}<br />
          <b>The Correct Answer is:</b> {he.decode(cAnswer)}<br /><br />

          Please select another card...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Answer;