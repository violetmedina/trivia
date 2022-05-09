
//CATEGORIES

const reducer = (state, action) => {

    //if no state has been defined yet, then reducer needs to define it

    if(state === undefined){
        state = {
            category: {},
        }
    }


    switch(action.type){

        case "DEFINE_CAT":
            return {
                ...state,
                category: action.data
            }

        default:
            return state;
    }
}

export default reducer;