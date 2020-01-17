import React from 'react';
import action from '../store/action/index.js'
class VoteFooter extends React.Component{
    constructor(){
        super()
    }
    render() {
        let {support, against} = action.vote;   //获取不同模块自己的行为函数，执行后获取对应的标识
        return (
            <div>
                <button onClick={e => window.store.dispatch(support())}>赞成</button>
                <button onClick={e => window.store.dispatch(against())}>反对</button>
            </div>
        )
    }
}
export default VoteFooter;
