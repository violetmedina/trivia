

const correctAnswer = (cAnswer, answer) => {

    return{
    type: "PICK_ANSWER",
    cAnswer, answer
    }
}

export default correctAnswer