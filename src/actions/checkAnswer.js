

const checkAnswer = (cAnswer, answer) => {

    return{
    type: "CHECK_ANSWER",
    cAnswer, answer
    }
}

export default checkAnswer