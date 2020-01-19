/**
 * 简化基于redux开发时候，编写业务逻辑代码，可以使用react-redux
 * 1.Provider
 * 我们把Provider设置为当前项目的根组件，可以把store挂载到Provider的上下文中（项目所以其它组件都可以基于上下文获取store了）
 * 2.connect
 * - 可以自动从Provider上下文获取store
 * - 可以把store中管理的状态和action中管理的行为对象，都基于属性的方式进行传递给对应的组件
 * - 当store中状态改变，自动重新渲染当前组件，不需要我们自己subscribe了
 */

import {createStore} from 'redux'
import reducer from './reducer/index.js'
let store = createStore(reducer);
// window.store = store;
export default store;
