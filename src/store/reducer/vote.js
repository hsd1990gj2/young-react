import * as TYPES from '../actionTypes.js'
//定义不同模块的自己的reducer
export default function vote(state = {
    n: 0,
    m: 0,
    name: ''
}, action) {
    //不要直接对state进行了修改，state是引用，store内部的state同样也就变了，这样导致React-Redux认为dispatch前后state没有改变，就不会重新渲染UI，实际state已经改变。
    //这里先深拷贝一份
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.VOTE_SUPPORT: newState.n = state.n + 1; break;
        case TYPES.VOTE_AGAINST: newState.m = state.m + 1; break;
        case TYPES.VOTE_NAME: newState.name = action.name; break;
    }
    return newState;
}
