import React from 'react';
import PropTypes from "prop-types"
class VoteBody extends React.Component{
    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    }
    constructor(){
        super()
    }
    render() {
        let {n, m} = this.context;
        return (
            <div>
                <div>赞成{n}票</div>
                <div>反对{m}票</div>
            </div>
        )
    }
}
export default VoteBody;
