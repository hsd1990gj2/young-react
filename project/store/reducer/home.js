import Types from '../actionTypes'
export default function a(
    state = {
        n : 0
    },
    action
) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.HOME_A: newState.n = state.n + 1;
    }
    return newState;
}
