// function Title() {
//     return (
//         <div>
//             <h2>新闻列表</h2>
//         </div>
//     );
// }

import React from 'react';
class Title extends React.Component{
    constructor(){
        super();
    }
    render() {
        return <h2>{this.props.data}</h2>;
    }
}
export default Title
