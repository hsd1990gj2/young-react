import * as TYPES from '../actionTypes.js'
//定义不同模块的自己的reducer
export default function vote(state = {
    n: 0,
    m: 0
}, action) {
    switch (action.type) {
        case TYPES.VOTE_SUPPORT: state.n = state.n + 1; break;
        case TYPES.VOTE_AGAINST: state.m = state.m + 1; break;
    }
    return state;
}
