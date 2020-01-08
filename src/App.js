import React from 'react';
import Title from './todoList/Apptitle.js';
import Appform from './todoList/Appform.js';
import Applist from './todoList/Applist.js';
import 'antd/dist/antd.css';

import Say from './study/say.js'
import Clock from './study/clock.js'
import Banner from './component/banner.js'

let list = [
    {
        id: 1,
        title: '1'
    },
    {
        id: 2,
        title: '2'
    },
    {
        id: 3,
        title: '3'
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
            ]
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
                {/*<Clock></Clock>*/}
                <Banner list={list}></Banner>
            </div>
        );
    }
}


export default App;
