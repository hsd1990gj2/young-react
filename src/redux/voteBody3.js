import React from 'react';
import {connect} from 'react-redux'
class VoteBody extends React.Component{
    constructor(){
        super()
    }
    render() {
        console.log(this.props);
        let {n, m} = this.props;  //直接都从props属性上取就可以了
        return (
            <div>
                <div>赞成{n}票</div>
                <div>反对{m}票</div>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//         ...state.vote
//     }
// }
// export default connect(mapStateToProps)(VoteBody);
export default connect(state => {return {...state.vote}})(VoteBody);
