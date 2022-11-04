import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checkAnswer from '../actions/checkAnswer';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './main.css'
import he from 'he'
// import updateBoard from '../actions/updateBoard';

const Answer = ({ answer, index, setShowAnswers }) => {

  const cAnswer = useSelector(state => state.answerReducer.cAnswer)
  const pickedAnswer = useSelector(state => state.answerReducer.pickedAnswer)
  const isCorrect = useSelector(state => state.answerReducer.isCorrect)
  const winnerX = useSelector(state => JSON.stringify(state.winnerReducer.winnerX))
  const winnerO = useSelector(state => JSON.stringify(state.winnerReducer.winnerO))

  const [show, setShow] = useState(false);
  const [gameBoard, setGameBoard] = useState((useSelector(state => JSON.stringify(state.answerReducer.boardState))))

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false); //to close the modal
    setShowAnswers(false);
    correctAnswer();
  }

  const handleShow = () => setShow(true); //to pop up the modal

  const handleAnswer = (e, answer) => {
    e.preventDefault();
    determineAnswer(cAnswer, answer);
    handleShow();
  }

  function determineAnswer(cAnswer, answer) {
    dispatch(checkAnswer(cAnswer, answer));
  }

  function correctAnswer() {
    if ((gameBoard[0] === [true, "yes"] && gameBoard[1] === [true, "yes"] && gameBoard[2] === [true, "yes"]) ||
        (gameBoard[3] === [true, "yes"] && gameBoard[4] === [true, "yes"] && gameBoard[5] === [true, "yes"]) ||
        (gameBoard[6] === [true, "yes"] && gameBoard[7] === [true, "yes"] && gameBoard[8] === [true, "yes"]) ||
        (gameBoard[0] === [true, "yes"] && gameBoard[3] === [true, "yes"] && gameBoard[6] === [true, "yes"]) ||
        (gameBoard[1] === [true, "yes"] && gameBoard[4] === [true, "yes"] && gameBoard[7] === [true, "yes"]) ||
        (gameBoard[2] === [true, "yes"] && gameBoard[5] === [true, "yes"] && gameBoard[8] === [true, "yes"]) ||
        (gameBoard[0] === [true, "yes"] && gameBoard[4] === [true, "yes"] && gameBoard[8] === [true, "yes"]) ||
        (gameBoard[2] === [true, "yes"] && gameBoard[4] === [true, "yes"] && gameBoard[6] === [true, "yes"]))
        {
          console.log("WINNER")
        }
      }

return (
  <>

    <form className='d-flex flex-column'>
      <Button variant="dark" onClick={(e) => handleAnswer(e, answer)}>{index + 1}. {answer}</Button>{' '}
    </form>
    <br></br>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isCorrect === "yes" ? "CORRECT! O marks the spot!" : "INCORRECT... X marks the spot."}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p><b>Your Answer:</b>{he.decode(pickedAnswer)}</p>
        <p><b>The Correct Answer:</b>{he.decode(cAnswer)}</p> */}
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