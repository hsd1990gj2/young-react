import React from 'react';
import VoteHeader from './voteHeader.js'
import VoteBody from './voteBody.js'
import VoteFooter from './voteFooter.js'
class Vote extends React.Component{
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <VoteHeader title={this.props.title}></VoteHeader>
                <VoteBody></VoteBody>
                <VoteFooter></VoteFooter>
            </div>
        )
    }
}
export default Vote;
