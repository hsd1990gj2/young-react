import React from 'react';
import {connect} from 'react-redux'
import action from '../store/action/index.js'
class VoteFooter extends React.Component{
    constructor(){
        super()
    }
    render() {
        let {support, against} = this.props;   //直接都从props属性上取就可以了
        return (
            <div>
                <button onClick={support}>赞成</button>
                <button onClick={against}>反对</button>
            </div>
        )
    }
}
export default connect(state => ({...state.vote}), action.vote)(VoteFooter);
