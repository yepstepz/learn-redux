import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers/index.js';
import Counter from './component/index.js'
let root = () => ReactDOM.render(
    <Counter value={store.getState()}
             onIncrement={()=> store.dispatch({type : 'INCREMENT'})}
             onDecrement={()=> store.dispatch({type : 'DECREMENT'})}
    />, document.getElementById('root'));
root();
store.subscribe(root);