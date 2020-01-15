import React from 'react';
class VoteHeader extends React.Component{
    constructor(){
        super()
    }
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}
export default VoteHeader;
