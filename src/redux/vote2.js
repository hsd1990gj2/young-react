import React from 'react';
import VoteHeader from './voteHeader2.js'
import VoteBody from './voteBody2.js'
import VoteFooter from './voteFooter2.js'
import PropTypes from "prop-types";
class Vote extends React.Component{
    //设置后代需要使用的上下文及类型
    static childContextTypes = {    
        title: PropTypes.string,
    }
    //获取后代需要的上下文信息(可以把这个方法理解为一个生命周期函数，在每一次render之前执行,return的值就是后期需要用到的上下文具体信息值)
    getChildContext(){
        let {title} = this.props;
        return {
            title,
        }
    }
    constructor(){
        super();
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
