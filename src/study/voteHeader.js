import React from 'react';
class VoteHeader extends React.Component{
    constructor(){
        super()
    }
    render() {
        let {title} = this.props;
        return (
            <div>{title}</div>
        )
    }
}
export default VoteHeader;
