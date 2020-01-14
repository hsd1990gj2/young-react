import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd'
import '../static/css/banner.scss'

export default class Banner extends React.Component{
    //设置默认值
    static defaultProps = {
        list: [],
        interval: 3000,
    }
    //设置默认规则
    static propTypes = {
        list: PropTypes.array,
        interval: PropTypes.number
    }
    //初始化状态值
    constructor(){
        super();
        this.state = {
            step: 1,
            speed: '0.2s'
        }
    }
    //组件挂载前进行数据预处理
    componentWillMount() {
        this.list = [this.props.list[this.props.list.length - 1], ...this.props.list, this.props.list[0]];
    }
    //组件挂载完成触发事件
    componentDidMount() {
        this.autoMove();
    }
    //组件更新前进行判断处理
    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextState.step >= this.list.length) {
            this.setState({
                step: 1,
                speed: '0s'
            });
        }
        if (nextState.step === -1) {
            this.setState({
                step: this.list.length - 2,
                speed: '0s'
            });
        }
    }
    //组件完成更新进行判断处理
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
        if (this.state.step === 3 && this.state.speed === '0s') {
            let delayTimer = setTimeout(()=> {
                this.setState({
                    step: this.state.step - 1,
                    speed: '0.2s'
                });
            }, 50);
        }
    }
    autoMove = ()=> {
        this.autoTime = setInterval(()=> {
            this.setState({
                step: this.state.step+1
            })
        }, this.props.interval)
    }
    handleClick = (e)=> {
        if (e.target.tagName === 'BUTTON') {
            let dir = e.target.getAttribute('dir');
            this.setState({
                step: dir === 'LEFT' ? this.state.step - 1 : this.state.step+1,
                speed: '0.2s'
            })
        }
    };
    render() {
        let wrapperStyle = {
          width: `${this.list.length*1000}px`,
          left: `${-this.state.step*1000}px`,
          transition: `left ${this.state.speed} linear 0s`
        };
        return (
            //利用事件委托统一处理
            <div className={'banner_container'} onMouseEnter={event => {clearInterval(this.autoTime)}} onMouseLeave={this.autoMove} onClick={this.handleClick}>
                <div className={'wrapper'} style={wrapperStyle}>
                    {
                        this.list.map((item,index) => {
                            let {img} = item;
                            return (
                                <div className={'slide'} key={index}>
                                    <img src={img}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Button dir={'LEFT'}>左</Button>
                <Button dir={'Right'}>右</Button>
            </div>
        )
    }
}
