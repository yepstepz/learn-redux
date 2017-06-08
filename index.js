import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

let state = createStore(counter);

state.subscribe( () => {
    console.log(state.getState());
})
state.dispatch({
    type: 'INCREMENT'
})
state.dispatch({
    type: 'INCREMENT'
})
state.dispatch({
    type: 'INCREMENT'
})