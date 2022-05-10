

const correctAnswer = (cAnswer, answer) => {
    console.log("correct answer", cAnswer)
    console.log("picked answer", answer)

    return{
    type: "PICK_ANSWER",
    cAnswer, answer
    }
}

export default correctAnswer