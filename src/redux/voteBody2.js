import React from 'react';
class VoteBody extends React.Component{
    constructor(){
        super()
    }
    componentDidMount() {
        window.store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    render() {
        let {n, m} = window.store.getState().vote;  //获取不同模块自己的state
        return (
            <div>
                <div>赞成{n}票</div>
                <div>反对{m}票</div>
            </div>
        )
    }
}
export default VoteBody;
