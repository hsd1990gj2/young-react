import React from 'react';
class VoteFooter extends React.Component{
    constructor(){
        super()
    }
    render() {
        let store = window.store;
        return (
            <div>
                <button onClick={e => store.dispatch({type: 'support'})}>赞成</button>
                <button onClick={e => store.dispatch({type: 'against'})}>反对</button>
            </div>
        )
    }
}
export default VoteFooter;
