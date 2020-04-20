import home from './home'
import course from './course'
import {combineReducers} from 'redux'
let reducer = combineReducers({
    home,
    course
});
export default reducer;
