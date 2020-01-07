import React from 'react';
import Appform from './todoList/Appform.js';
import Applist from './todoList/Applist.js';
import 'antd/dist/antd.css';

import Say from './study/say.js'
import Clock from './study/clock.js'


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
                <div>todo with react</div>
                <Appform addItem={this.onAddItem.bind(this)}/>
                <Applist list={this.state.list}/>
                <Say num={10}></Say>
                <Say title={'two'} num={20}></Say>
                <Clock></Clock>
            </div>
        );
    }
}
// function App() {
//   return (
//     <div>
//       <div>todo with react</div>
//       <Appform/>
//       <Applist/>
//     </div>
//   );
// }

export default App;
