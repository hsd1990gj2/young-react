import React from 'react';
class Welcome extends React.Component{
    render() {
        let el = (
            <div>hello, {this.props.name}</div>
        );
        return el;
    }
};
export default Welcome;
