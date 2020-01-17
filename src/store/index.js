import {createStore} from 'redux'
import reducer from './reducer/index.js'
let store = createStore(reducer);
window.store = store;

