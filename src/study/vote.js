import React from 'react';
import VoteHeader from './voteHeader.js'
import VoteBody from './voteBody.js'
import VoteFooter from './voteFooter.js'
class Vote extends React.Component{
    constructor(){
        super()
        this.state = {
            n: 0,
            m: 0
        }
    }
    handleNum = (type)=> {
        if (type === 1) {
            this.setState({
                n: this.state.n+1
            })
        } else {
            this.setState({
                m: this.state.m+1
            })
        }
    }
    render() {
        let {title} = this.props;
        let {n, m} = this.state;
        let {handleNum} = this;
        return (
            <div>
                <VoteHeader title={title}></VoteHeader>
                <VoteBody n={n} m={m}></VoteBody>
                <VoteFooter handleNum={handleNum}></VoteFooter>
            </div>
        )
    }
}
export default Vote;
