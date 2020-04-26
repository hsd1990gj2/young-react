import React from 'react';
import {connect} from 'react-redux'
import action from '../store/action'
import {$http} from "../http";
// import {connect} from './my-react-redux.js'
class VoteBody extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     name: ''
        // }
    }
    componentWillMount() {
        console.log(222222222);
        $http({
            url: '/data.json',
            method: 'get'
        }).then(res => {
            this.props.updateName(res.name);
            // this.setState({
            //     name: res.name
            // });
        })
        // if (!this.props.name) {
        //
        // }
    }
    render() {
        let {n, m} = this.props;  //直接都从props属性上取就可以了
        return (
            <div>
                <div>赞成{n}票</div>
                <div>反对{m}票</div>
                <div>姓名{this.props.name}</div>
            </div>
        )
    }
}
export default connect(state => ({...state.vote}), action.vote)(VoteBody);
