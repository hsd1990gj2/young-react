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
    //看不到你处理TOGGLE_TOPNAV的reducer是怎么写的，我猜测应该是因为你直接对state进行了修改，state是引用，store内部的state同样也就变了，这样导致React-Redux认为dispatch前后state没有改变，就不会重新渲染UI，实际state已经改变。
    // 当处理TOGGLE_TOPNAV的时候触发了state变动，所有的数据被渲染，所以UI就变化了。
    //
    // 解决办法不要直接修改state 不要直接修改state 不要直接修改state

    //一定要深复制，一定要深复制，一定要深复制。两个小时的血泪史。
    return JSON.parse(JSON.stringify(state));
}
