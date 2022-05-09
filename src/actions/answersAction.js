
//WORKING!
const combineAnswers = (incorrect, correct) => {

    return{
    type: "HANDLE_ANSWERS",
    incorrect, correct
    }
}

export default combineAnswers