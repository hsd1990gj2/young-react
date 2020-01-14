import React from 'react';
class Clock extends React.Component{
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleString(),
            num: 0
        };
        this.time = React.createRef();  //通过函数创建一个
    }
    componentDidMount() {
        /**
         * 修改状态的两种方式
         * 1.通过this.setState来修改状态属性
         * 2.通过this.forceUpdate来强制渲染
         * 3.通过ref手动修改DOM
         */
        setInterval(()=>{
            //这种方式不仅能修改状态，还能重新渲染组件。
            // this.setState({
            //     time: new Date().toLocaleString()
            // })

            //这种方式能修改状态，但是不能重新渲染组件。如果要渲染，则需要this.forceUpdate()强制渲染。
            // this.state.time = new Date().toLocaleString();
            // this.forceUpdate();

            /**
             * 如果我们给元素设置ref属性(属性值是唯一的)
             * ref="xxx",react在解析jsx的时候，会把所设置的这个属性的元素以对象键值对的方式增加到当前实例的refs对象中{xxx:元素}
             * 在jsx渲染完成后，想要操作这个元素，直接基于this.refs.xxx就可以获取到，这就是react中的dom操作.
             */
            // this.refs.time.innerHTML = new Date().toLocaleString();
            //console.log(this.refs)  {time: h2}

            this.time.current.innerHTML = new Date().toLocaleString();
            // console.log(this.time)  //{time: h2}

        }, 1000)
    }
    render() {
        // return <h2 ref={'time'}>{this.state.time}</h2>

        //ref的值除了是字符串外，还可以是函数。如果是函数，参数x代表的就是当前元素本身，而我们一般会把当前元素直接挂载到实例上，
        // 以后直接this.xxx就可以操作元素了(例如：这里的x就是h2)

        const numbers = [1, 2, 3, 4, 5];
        return (
            <div>
                {/*<h2 ref={x => {this.time = x}}>{this.state.time}</h2>*/}
                <h2 ref={this.time}>{this.state.time}</h2>
                <button onClick={event => {
                    //此处setState修改组件的状态是异步编程：执行完setState后，会把修改状态和通知组件渲染的操作放到EventQueue(等待事件队列中),当后面的主栈任务完成才会执行这个操作。
                    //但setState不全是异步操作。
                    this.setState({
                        num: this.state.num+1
                    });
                    console.log(this.state.num);    //第一次打印的是0
                }}>点我</button>

                {
                    numbers.map((number) => <li key={number.toString()}>{number}</li>)
                }

            </div>
        )
    }
}
export default Clock;
