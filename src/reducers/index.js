import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import answerReducer from './answerReducer';
import winnerReducer from './winnerReducer';

let rootReducer = combineReducers({

    answerReducer: answerReducer,
    categoryReducer: categoryReducer,
    winnerReducer: winnerReducer

})

export default rootReducer;