
const winnerReducer = (state, action) => {

    if(state === undefined){
        state = {
            winnerX: {},
            winnerO: {}
        }
    }


    switch(action.type){

        case "DEFINE_WINNER_X":
            return {
                ...state,
                winnerX: action.data,
            }
        case "DEFINE_WINNER_O":
            return {
                ...state,
                winnerO: action.data
            }
        default:
            return state;
    }
}

export default winnerReducer;