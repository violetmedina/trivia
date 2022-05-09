
// ANSWERS

const reducer = (state, action) =>{

    if(state === undefined){
        state = {
            iAnswers: [],
            cAnswer: ""
        }
    }

    switch(action.type){
        case "HANDLE_ANSWERS":

        // switch

            return {
                ...state,
                answers: action.incorrect.concat(action.correct)
            }
            default:
                return state
            }

}

export default reducer

