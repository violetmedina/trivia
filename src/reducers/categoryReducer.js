
const categoriesReducer = (state, action) => {

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

export default categoriesReducer;