import React from 'react';
// export default class Form extends React.Component{
//     constructor () {
//         super();
//         this.state = {
//             name: 'zs',
//             age: 23
//         }
//     }
//     handle = (e)=> {
//         let name = e.target.name;
//         this.setState({
//             [name]: e.target.value
//         })
//     }
//     render() {
//        return (
//            <div>
//                <input name={'name'} value={this.state.name} onChange={(e)=>{this.handle(e)}}/>{this.state.name}
//                <input name={'age'} value={this.state.age} onChange={(e)=>{this.handle(e)}}/>{this.state.age}
//            </div>
//        )
//     }
// }
export default class Form extends React.Component{
    constructor () {
        super();
        this.state = {
            name: 'zs',
            age: 23
        }
    }
    handle = (e)=> {
        let name = e.target.name;
        this.setState({
            [name]: this[name].value
        })
    }
    render() {
        return (
            <div>
                <input name={'name'} defaultValue={this.state.name} ref={input => {this.name = input}} onChange={e => this.handle(e)}/>{this.state.name}
                <input name={'age'} defaultValue={this.state.age} ref={input => {this.age = input}} onChange={e => this.handle(e)}/>{this.state.age}
            </div>
        )
    }
}
