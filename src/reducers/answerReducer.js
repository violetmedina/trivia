
// ANSWERS

const reducer = (state, action) =>{

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

        // case "SHUFFLE_ANSWERS":
        //     return {
        //         ...state,
        //         answers: "test"
        //     }

        case "PICK_ANSWER":

                if(action.cAnswer === action.answer){
                    // console.log("Correct Answer!");
                    return {
                        ...state,
                        pickedAnswer: action.answer,
                        isCorrect: "yes",
                        boardState: {...state.boardState, [state.activeCard]: [true, 'yes']}
                    }
                }
                else{
                    // console.log("Incorrect Answer!");
                    return {
                        ...state,
                        pickedAnswer: action.answer,
                        isCorrect: "no",
                        boardState: {...state.boardState, [state.activeCard]: [true, 'no']}
                    }
                }

        default: return state
    }

}
export default reducer

