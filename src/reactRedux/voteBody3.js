import React from 'react';
import {connect} from 'react-redux'
// import {connect} from './my-react-redux.js'
class VoteBody extends React.Component{
    constructor(){
        super()
    }
    render() {
        let {n, m} = this.props;  //直接都从props属性上取就可以了
        return (
            <div>
                <div>赞成{n}票</div>
                <div>反对{m}票</div>
            </div>
        )
    }
}
export default connect(state => {return {...state.vote}})(VoteBody);
