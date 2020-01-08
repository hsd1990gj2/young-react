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
        return (
            <div>
                <h2>{this.props.data}</h2>
                <h4>{this.props.children}</h4>
            </div>
        )
    }
}
export default Title
