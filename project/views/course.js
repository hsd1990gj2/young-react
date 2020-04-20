import React from 'react';
import {connect} from 'react-redux'
import action from '../store/action/index.js'
import {Carousel} from 'antd'
import {$http} from "../service/http";
class Course extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     imgList: []
        // }
    }
    // async componentWillMount () {
    //     if (!this.props.imgList.length) {
    //         let res = await $http({
    //             url: '/data.json'
    //         });
    //         if (res) {
    //             this.props.getImgList(res.imgList);
    //         }
    //     }
    // }
    componentWillMount () {
        if (!this.props.imgList.length) {
            this.props.getImgList()
        }
    }
    // componentWillMount () {
    //     $http({
    //         url: '/data.json'
    //     }).then(res => {
    //         if (res) {
    //             this.setState({
    //                 imgList: res.imgList
    //             })
    //         }
    //     });
    // }
    render() {
        let {imgList} = this.props;
        return (
            <div>
                {
                    imgList.length ? <Carousel autoplay>
                        {
                            imgList.map((item, index) => {
                                return <div key={index}>
                                    <img style={{"width":"100px", "height":"100px"}} src={item} alt=""/>
                                </div>

                            })
                        }
                    </Carousel> : null
                }
            </div>
        )
    }
}
export default connect(state => ({...state.course}), action.course)(Course);
