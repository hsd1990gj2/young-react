import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action/index.js'
import {Button} from 'antd'
class Home extends React.Component{
    constructor(){
        super();
    }
    render() {
        let {a, n} = this.props;
        return (
            <div>
                <div>home</div>
                <div>数量{n}</div>
                <Button onClick={a}>增加</Button>
            </div>
        )
    }
}
export default connect(state => ({...state.home}),action.home)(Home);
