import React from 'react';
// import {styles} from './styles.js'
import './styles.css'

class Applist extends React.Component{
    render() {
        let list = this.props.list.map((item,index)=>{
            return (
                <div key={index} className={'listItem'}>
                    <div className={'id'}>{item.id}</div>
                    <div className={'title'}>{item.text}</div>
                    <div className={'status'}>{item.complete ? '已完成' : '未完成'}</div>
                </div>
            )
        });
        return (
            <div>{list}</div>
        );
    }
}
export default Applist;
