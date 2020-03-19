import React from 'react';
import VoteBody from './voteBody3.js'
import VoteFooter from './voteFooter3.js'
class Vote extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <VoteBody></VoteBody>
                <VoteFooter></VoteFooter>
            </div>
        )
    }
}
export default Vote;

