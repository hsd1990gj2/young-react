import React from 'react';
import {connect} from 'react-redux'
// import {connect} from './my-react-redux.js'
import action from '../store/action'
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

/**
 * connect: 高阶组件，基于它会构建出一个代理组件（代替voteFooter的组件），我们返回的是代理后的组件
 * connect(mapStateToProps,mapDispatchTpProps)(component)
 * mapStateToProps: 把store容器中管理的状态信息作为属性传递给某一组件A
 * mapDispatchTpProps: 把store中需要派发的行为任务，也基于属性的方式传递给组件A
 * component:我们之前创建的组件
 */
export default connect(state => ({...state.vote}), action.vote)(VoteFooter);
