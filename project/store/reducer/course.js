import Types from '../actionTypes.js'
export default function course(
    state = {
        imgList : [],
    },
    action
) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.IMGLIST: newState.imgList = action.imgList;
    }
    return newState;
}
