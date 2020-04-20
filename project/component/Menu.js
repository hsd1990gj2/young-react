import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.scss'
import {Icon} from 'antd'
class Menu extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div className={'footerMenu'}>
                <NavLink to={'/home'}>
                    <Icon type={'home'} />
                    <div>首页</div>
                </NavLink>
                <NavLink to={'/course'}>
                    <Icon type={'profile'} />
                    <div>我的课程</div>
                </NavLink>
                <NavLink to={'/user'}>
                    <Icon type={'user'} />
                    <div>个人中心</div>
                </NavLink>
            </div>
        )
    }
}
export default Menu;
