import React from 'react';
import Title from './todoList/Apptitle.js';
import Appform from './todoList/Appform.js';
import Applist from './todoList/Applist.js';
import 'antd/dist/antd.css';

import store from './store/index.js'
import {Provider} from 'react-redux'


import Say from './study/say.js'
import Clock from './study/clock.js'
import Form from './study/form.js'
import Banner from './component/banner.js'
// import Vote from './study/vote.js'
// import Vote1 from './study/vote1.js'
// import Vote2 from './redux/vote2.js'
import Vote3 from './redux/vote3.js'




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
            <Provider store={store}>
                <div>
                    {/*<Title data={'todo with react'}>one</Title>*/}
                    {/*<Appform addItem={this.onAddItem.bind(this)}/>*/}
                    {/*<Applist list={this.state.list}/>*/}
                    {/*<Say num={10}></Say>*/}
                    {/*<Say title={'two'} num={20}></Say>*/}
                    {/*<Clock flag={this.state.flag}></Clock>*/}
                    {/*<Form></Form>*/}
                    {/*<Banner list={list}></Banner>*/}
                    {/*<Vote1 title={'标题一'}></Vote1>*/}
                    {/*<Vote2 title={'标题二'}></Vote2>*/}
                    <Vote3></Vote3>

                </div>
            </Provider>
        );
    }
}


export default App;
