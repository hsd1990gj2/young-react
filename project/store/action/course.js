import Types from '../actionTypes.js'
import {$http} from "../../service/http.js";
export default {
    // getImgList (imgList) {
    //     return {
    //         type: Types.IMGLIST,
    //         imgList
    //     }
    // }
    async getImgList () {
        let res = await $http({
            url: '/data.json'
        });
        if (res) {
            return {
                type: Types.IMGLIST,
                imgList: res.imgList
            }
        }
    }
}
