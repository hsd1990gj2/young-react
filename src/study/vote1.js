import React from 'react';
import PropTypes from 'prop-types';
import VoteHeader from './voteHeader1.js'
import VoteBody from './voteBody1.js'
import VoteFooter from './voteFooter1.js'
class Vote extends React.Component{
    //设置后代需要使用的上下文及类型
    static childContextTypes = {
        title: PropTypes.string,
        n: PropTypes.number,
        m: PropTypes.number,
        handleNum: PropTypes.func
    }
    //获取后代需要的上下文信息(可以把这个方法理解为一个生命周期函数，在每一次render之前执行,return的值就是后期需要用到的上下文具体信息值)
    getChildContext(){
        let {title} = this.props;
        let {n, m} = this.state;
        let {handleNum} = this;
        return {
            title,
            n,
            m,
            handleNum
        }
    }
    constructor(){
        super();
        this.state = {
            n: 0,
            m: 0
        }
    }
    handleNum = (type)=> {
        if (type === 1) {
            this.setState({
                n: this.state.n+1
            })
        } else {
            this.setState({
                m: this.state.m+1
            })
        }
    }
    render() {
        return (
            <div>
                {/*这里就不需要再手动传第props了*/}
                <VoteHeader></VoteHeader>
                <VoteBody></VoteBody>
                <VoteFooter></VoteFooter>
            </div>
        )
    }
}
export default Vote;
