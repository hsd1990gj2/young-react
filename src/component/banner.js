import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/banner.scss'
export default class Banner extends React.Component{
    static defaultProps = {
        list: [],
        interval: 3000,
    }
    static propTypes = {
        list: PropTypes.array,
        interval: PropTypes.number
    }
    constructor(){
        super();
        this.state = {
            step: 1,
            speed: '0.2s'
        }
    }
    componentWillMount() {
        this.list = [this.props.list[this.props.list.length - 1], ...this.props.list, this.props.list[0]];
    }
    componentDidMount() {
        this.autoTime = setInterval(()=> {
            this.setState({
                step: this.state.step+1
            })
        }, this.props.interval)
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextState.step >= this.list.length) {
            this.setState({
                step: 1,
                speed: '0s'
            });
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.step === 1 && this.state.speed === '0s'){
            //js设置transition,不能在主栈队列执行时候遇到多次，这样渲染以最后一次为主，此时我们可以把第二次操作移动到EventQueue中。
            let delayTimer = setTimeout(()=> {
                this.setState({
                    step: this.state.step+1,
                    speed: '0.2s'
                });
            }, 50);
        }
    }
    render() {
        let wrapperStyle = {
          width: `${this.list.length*1000}px`,
          left: `${-this.state.step*1000}px`,
          transition: `left ${this.state.speed} linear 0s`
        };
        return (
            <div className={'banner_container'}>
                <div className={'wrapper'} style={wrapperStyle}>
                    {
                        this.list.map((item,index) => {
                            let {title} = item;
                            return <div className={'slide'} key={index}>{title}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
