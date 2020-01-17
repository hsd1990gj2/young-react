import vote from './vote'
import person from './person'
import {combineReducers} from 'redux'
let reducer = combineReducers({ //利用combineReducers函数合并不同的reducer
    vote,
    person
});
export default reducer;
