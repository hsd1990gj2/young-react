import React from 'react';
import PropTypes from 'prop-types';

class Say extends React.Component{
    static defaultProps = {
        title: 'hello word'
    }
    static propTypes = {
        title: PropTypes.string,
        num: PropTypes.number.isRequired
    }
    constructor(props){
        //当super中没有传入props时
        /**
         * 1.在调用组件开始执行constructor，参数props是传递进来的属性信息（而且是经过defaultProps和propTypes等处理过的）
         * 2.但是此时还没有挂载到实例上，所以this.props的结果是undefined
         * 3.constructor结束后，挂载就完成了，所以其它生命周期函数中是可以基于this.props来获取属性的
         */
        // super();
        // console.log(props, this.props)  //{title: "two", num: 20}   undefined

        //当super中传入props时
        /**
         * 会在当前实例上挂载很多私有属性
         * this.props = props;
         * this.context = context;
         * this.refs = {};
         * 现在不这样处理，当constructor执行完成，react也会帮我们给实例挂载这些属性
         */
        super(props);   //call继承：React.Component.call(this)
        console.log(props, this.props)  //{title: "two", num: 20}  {title: "two", num: 20}

        //实例上还可以调取Component类的两个方法
        /**
         * this.setState()
         * this.forceUpdate()
         */

    }
    render() {
        return (
            <p>{this.props.title}</p>
        )
    }
}
// Say.propTypes = {
//     title: PropTypes.string
// }
export default Say;
