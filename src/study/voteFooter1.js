import React from 'react';
import PropTypes from "prop-types";
class VoteFooter extends React.Component{
    static contextTypes = {
        handleNum: PropTypes.func,
    }
    constructor(){
        super()
    }
    render() {
        let {handleNum} = this.context;
        return (
            <div>
                <button onClick={e => handleNum(1)}>赞成</button>
                <button onClick={e => handleNum(0)}>反对</button>
            </div>
        )
    }
}
export default VoteFooter;
