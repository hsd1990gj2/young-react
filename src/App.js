import React from 'react';
import Title from './todoList/Apptitle.js';
import Appform from './todoList/Appform.js';
import Applist from './todoList/Applist.js';
import 'antd/dist/antd.css';
// import {createStore} from 'redux'
import {createStore} from './redux/mydux.js'

import Say from './study/say.js'
import Clock from './study/clock.js'
import Form from './study/form.js'
import Banner from './component/banner.js'
// import Vote from './study/vote.js'
import Vote1 from './study/vote1.js'
import Vote from './redux/vote.js'
let list = [
    {
        id: 1,
        img: require('./static/image/one.jpg')
    },
    {
        id: 2,
        img: require('./static/image/two.jpg')
    },
    {
        id: 3,
        img: require('./static/image/three.jpg')
    }
];


/**
 * 创建redux容器用力啊管理公共的状态信息
 * 1.创建容器的时候其实已经准备好了管理员reducer了
 * 2.createStore(reducer)：相当于创建一个容器并雇佣了一个管理员reducer
 * 3.创建出来的store存在几个属性：getState/dispatch/subscribe
 */

let store = createStore(reducer);
window.store = store;   //把创建的容器挂载到全局下，保证每一个子组件都可以获取到store,从而执行一些其它的操作（当然也可以基于属性）

//reducer管理员是一个方法：reducer方法是在dispatch派发的时候执行的
//state：现有store容器中的状态信息(如果store中没有，我们给一个初始值)
//action: 告诉reduce如何去修改状态都在action中（它是一个对象，对象中固定的有type属性：派发任务的行为标识，reducer就是根据不同的行为标识来修改状态信息的）
function reducer(state = {
    n: 0,
    m: 0
}, action) {
    //reducer就是根据不同的行为标识来修改状态信息的
    switch (action.type) {
        case 'support': state.n = state.n+1;break;
        case 'against': state.m = state.m+1;break;
    }
    return state;   //return的是什么，就会把store中的状态改成什么
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [
                {id: 0, text: '天气不错哦!!!', complete: false},
                {id: 1, text: '你在家吗!!!', complete: false},
                {id: 2, text: '出去玩啊!!!', complete: true},
            ],
            flag: true
        }
    }
    onAddItem (item) {
        this.setState({
            list: this.state.list.concat(item)
        });
    }
    render() {
        return (
            <div>
                {/*<Title data={'todo with react'}>one</Title>*/}
                {/*<Appform addItem={this.onAddItem.bind(this)}/>*/}
                {/*<Applist list={this.state.list}/>*/}
                {/*<Say num={10}></Say>*/}
                {/*<Say title={'two'} num={20}></Say>*/}
                {/*<Clock flag={this.state.flag}></Clock>*/}
                {/*<Form></Form>*/}
                {/*<Banner list={list}></Banner>*/}
                <Vote title={'标题一'}></Vote>
                {/*<Vote1 title={'标题二'}></Vote1>*/}

            </div>
        );
    }
}


export default App;
