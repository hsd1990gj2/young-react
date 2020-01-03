import React from 'react';
import {Button, Input} from 'antd';
class Appform extends React.Component{
    constructor(props){
        super(props);
        this.state = {msg: ''};
        this.change = this.change.bind(this);
        this.add = this.add.bind(this);
    }
    change (e) {
        this.setState({
            msg: e.target.value
        })
    }
    add () {
       this.props.addItem({text: this.state.msg});
    }
    render() {
        return (
            <div>
                <Input style={{width: '200px'}} placeholder={"请输入内容"} defaultValue={this.state.msg} onChange={this.change}/>
                <Button type={"primary"} onClick={this.add}>添加</Button>
                <div>{this.state.msg}</div>
            </div>
        );
    }
}
export default Appform;
