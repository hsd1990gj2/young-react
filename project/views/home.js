import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action/index.js'
import {Button} from 'antd'
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            total: 10
        }
    }
    count(aa, props){
        console.log(aa);
        console.log(props);
        return {
            total: aa.total + 1
        }
    }
    componentDidMount() {
        this.setState({
            total: this.state.total + 1
        });
        console.log(this.state);    //10
        // this.setState(this.count);
        // this.setState(this.count);
        this.setState((state, props)=>{
            console.log(state);    //11
            return {
                total: state.total + 1
            };
        });
        this.setState((state, props)=>{
            console.log(state);    //11
            console.log(this.state);
            return {
                total: state.total + 1
            };
        });
        // console.log(this.state);
        // this.setState(()=>{
        //     return {
        //         total: this.state.total + 1
        //     };
        // });
        // console.log(this.state);

    }
    render() {
        let {a, n} = this.props;
        return (
            <div>
                <div className={'title'}>home</div>
                <div>数量{n}</div>
                <Button onClick={a}>增加</Button>
            </div>
        )
    }
}
export default connect(state => ({...state.home}),action.home)(Home);
