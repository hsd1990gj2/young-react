import React from 'react'
import './Nav.scss'
import {Icon} from 'antd'
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHide: true
        }
    }
    render() {
        return (
            <div className={'headerBoxCon'}>
                <div className={'left'}>
                    <img src="/logo.png"/>
                    <span className={'title'}>珠峰培训</span>
                </div>
                <div className={'right'}>
                    <Icon type={'bars'} className={'handleBtn'} onClick={ev => {
                        this.setState({
                            isHide: !this.state.isHide
                        })
                    }}/>
                </div>
                <ul className={'filterList'} style={{display: this.state.isHide ? 'none' : 'block'}}>
                    <li>全部课程</li>
                    <li>React课程</li>
                    <li>Vue课程</li>
                    <li>小程序课程</li>
                </ul>
            </div>
        )
    }
}
export default Nav;
