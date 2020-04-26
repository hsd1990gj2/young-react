//按不同模块定义的不同的行为对象,返回相应的标识type类型
import * as TYPES from '../actionTypes.js'
let vote = {
    support(){
        return {
            type: TYPES.VOTE_SUPPORT
        }
    },
    against(){
        return {
            type: TYPES.VOTE_AGAINST
        }
    },
    updateName(name){
        return {
            type: TYPES.VOTE_NAME,
            name: name
        }
    },
};
export default vote;
