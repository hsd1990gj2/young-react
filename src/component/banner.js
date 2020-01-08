import React from 'react';
import '../static/css/banner.less'
export default class Banner extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div className={'container'}>
                <div className={'wrapper'}>
                    <div className={'item'}>1</div>
                    <div className={'item'}>2</div>
                    <div className={'item'}>3</div>
                </div>
            </div>
        )
    }
}
