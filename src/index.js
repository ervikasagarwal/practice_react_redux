import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';


const userReducer = ( state={name:"will",age:27}, action)=>{
    
    if(action.type==='CHANGE_USERNAME'){
      state = {...state, name:action.payload}
    }
    else if(action.type==='CHANGE_AGE'){
      state = {...state, age:action.payload}
    }
    return state;
}

const tweetReducer = (state=["hi"],action)=>{
    
    if(action.type==='CHANGE_USERNAME'){
        state = [...state, action.payload];
       }
    return state;     //each reducer should returns state
}
const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
});

const store   = createStore(reducers); // 0 initial store
store.subscribe(()=>{   // to listen to the store changes
    console.log('store changed ', store.getState());
})

store.dispatch({type:'CHANGE_USERNAME',payload:"will"}); // type is mandatory 
store.dispatch({type:'CHANGE_AGE',payload:35});
store.dispatch({type:'CHANGE_USERNAME',payload:"Vikas"});
store.dispatch({type:'CHANGE_USERNAME',payload:"vikki"});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
