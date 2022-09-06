
const answerReducer = (state, action) =>{

    if(state === undefined){
        state = {
            iAnswers: [],
            cAnswer: "",
            answers: [],
            pickedAnswer: "",
            isCorrect: "default",
            boardState: {"0": [false, "default"],
                        "1": [false, "default"],
                        "2": [false, "default"],
                        "3": [false, "default"],
                        "4": [false, "default"],
                        "5": [false, "default"],
                        "6": [false, "default"],
                        "7": [false, "default"],
                        "8": [false, "default"]},
            activeCard: "-1"
        }
    }

    switch(action.type){
        case "HANDLE_ANSWERS":
            //creates one array to display the answers on the page and also assigns the correct answer to global state
            return {
                ...state,
                answers: [...action.incorrect, action.correct],
                cAnswer: action.correct,
                isCorrect: "default",
                activeCard: action.index.toString()
            }

        case "CHECK_ANSWER":
            if(action.cAnswer === action.answer){
                return {
                    ...state,
                    pickedAnswer: action.answer,
                    isCorrect: "yes",
                    boardState: {...state.boardState, [state.activeCard]: [true, 'yes']}
                }
            }
            else{
                return {
                    ...state,
                    pickedAnswer: action.answer,
                    isCorrect: "no",
                    boardState: {...state.boardState, [state.activeCard]: [true, 'no']}
                }
            }
        // case "UPDATE_BOARD":
        //     return {
        //         boardState: state.boardState
        //     }

        default: return state
    }

}
export default answerReducer

