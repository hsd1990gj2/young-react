import React from 'react';
import PropTypes from "prop-types"
class VoteHeader extends React.Component{
    //在后代组件中，我们需要用到哪些上下文信息，一定要指定当前需要使用的信息值类型(而且必须和祖先指定的一样)，否者无法基于context获取
    static contextTypes = {
        title: PropTypes.string
    }
    constructor(){
        super()
    }
    render() {
        return (
            //通过上下文的值来进行渲染
            <div>{this.context.title}</div>
        )
    }
}
export default VoteHeader;
