import React from 'react';
import PropTypes from 'prop-types'

/**
 * Provider：项目的根组件
 * 1.接收传递给组件的store
 * 2.把store挂载到上下文中
 * 3.把根组件包含的所有内容渲染即可
 */
class Provider extends React.Component{
    //把基于属性传递进来的store挂载到上下文中
    static childContextTypes = {
        store: PropTypes.object
    };
    getChildContext(){
        return {
            store: this.props.store
        }
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        //把根组件包含的所有内容进行渲染
        return this.props.children;
    }
}

/**
 * connect高阶组件：接受两个参数
 * @param mapStatToProps 回调函数：我们需要把回调函数执行的结果基于属性传递给组件(执行的时候把state传递给它，返回的结果是当前组件需要的state)
 * @param mapDispatchToProps 回调函数：我们需要把回调函数执行的结果基于属性传递给组件(执行的时候把dispatch传递给它，返回的结果是当前组件需要派发的方法)
 * @return 返回一个高阶函数（紧接着会把这个函数执行）
 */
function connect(mapStatToProps, mapDispatchToProps) {
    //这里处理一下，让react-redux支持传递的mapDispatchToProps是actionCreator中的对象
    if (typeof mapDispatchToProps !== null && typeof mapDispatchToProps !== 'function') {
        let actionObj = mapDispatchToProps;
        mapDispatchToProps = function mapDispatchToProps(dispatch) {
            let res = {};
            for (let attr in actionObj) {
                if (!actionObj.hasOwnProperty(attr)) {
                    break;
                }
                //这里包装处理了一下
                res[attr] = function () {
                    dispatch(actionObj[attr]());
                }
            }
            return res;
        }
    }
    /**
     * 返回一个高阶组件
     * @param Component: 最终需要处理的组件（我们把容器中的状态和dispatch派发方法当作属性传递给这个组件）
     * @return 需要是一个组件（代理组件：基于代理组件我们可以完成connect需要实现的功能）
     *
     * Proxy需要实现的功能
     * 1.从上下文中获取store
     * 2.把执行方法返回的值当作属性传递给组件
     * 3.容器中状态改变，需要通知组件重新渲染
     */
    return function higherOrder (Component) {
        return class Proxy extends React.Component{
            static contextTypes = {
                store: PropTypes.object
            };
            constructor(props, context){
               super(props, context);
            }
            componentDidMount() {
                this.context.store.subscribe(()=>{
                    this.forceUpdate();
                })
            }
            render() {
                //propsPass: 执行两个回调函数获取传递给组件的属性信息
                //this.props: 调取Proxy组件的时候传递给Proxy的属性,这些属性本身就是为了传递给对应的组件的
                let propsPass = this.queryProps();
                return <Component {...propsPass} {...this.props} />
            }
            //执行两个回调函数获取需要传递给组件的属性信息
            queryProps = ()=> {
                let store = this.context.store;
                let state = store.getState();
                let dispatch = store.dispatch;
                state = typeof mapStatToProps === 'function' ? mapStatToProps(state) : null;
                dispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(dispatch) : null;
                return {
                    ...state,
                    ...dispatch
                }
            }
        }
    }
}
export {
    Provider,
    connect
}
