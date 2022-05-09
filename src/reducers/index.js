import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import answerReducer from './answerReducer'

let rootReducer = combineReducers({

    answerReducer: answerReducer,
    categoryReducer: categoryReducer

})

export default rootReducer;