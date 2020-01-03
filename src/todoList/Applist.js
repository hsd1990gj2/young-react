import React from 'react';
class Applist extends React.Component{
    render() {
        let list = this.props.list.map((item,index)=>{
            return (
                <div key={index}>{item.text}</div>
            )
        });
        return (
            <div>{list}</div>
        );
    }
}
export default Applist;
