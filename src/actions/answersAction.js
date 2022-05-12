
//WORKING!
const combineAnswers = (incorrect, correct, index) => {

    return{
    type: "HANDLE_ANSWERS",
    incorrect, correct, index
    }
}

export default combineAnswers