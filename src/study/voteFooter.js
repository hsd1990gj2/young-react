import React from 'react';
class VoteFooter extends React.Component{
    constructor(){
        super()
    }
    render() {
        let {handleNum} = this.props;
        return (
            <div>
                <button onClick={e => handleNum(1)}>赞成</button>
                <button onClick={e => handleNum(0)}>反对</button>
            </div>
        )
    }
}
export default VoteFooter;
