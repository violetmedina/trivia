
// ANSWERS

const reducer = (state, action) =>{

    if(state === undefined){
        state = {
            iAnswers: [],
            cAnswer: "",
            answers: [],
            pickedAnswer: ""
        }
    }

    switch(action.type){
        case "HANDLE_ANSWERS":

            return {
                answers: [...action.incorrect, action.correct]
            }

        case "PICK_ANSWER":

            switch(action.answer){

                case(action.cAnswer):
                    console.log("Correct Answer!");
                    break;
                default: console.log("Incorrect Answer!");
            }

        default: return state
    }

}
export default reducer

