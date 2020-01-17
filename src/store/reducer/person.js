export default function person(state = {
    name: 'zs',
    age: 23
}, action) {
    switch (action.type) {
        case 'sup_a': state.name = 'ls'; break;
        case 'sup_b': state.age = state.age + 1; break;
    }
    return state;
}
