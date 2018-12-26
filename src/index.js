import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import logger from "redux-logger";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from 'redux';


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


const middleware = applyMiddleware(thunk, logger());
const store   = createStore(reducers, middleware); // 0 initial store

store.subscribe(()=>{   // to listen to the store changes
    console.log('store changed ', store.getState());
})

store.dispatch({type:'CHANGE_USERNAME',payload:"will"}); // type is mandatory 
store.dispatch({type:'CHANGE_AGE',payload:35});
store.dispatch({type:'CHANGE_USERNAME',payload:"Vikas"});
store.dispatch({type:'CHANGE_USERNAME',payload:"vikki"});
store.dispatch(async (dispatch)=>{
 try{
   dispatch({type:"FETCH_USERS_START"});
    const courses = await fetch('http://localhost:6789/courses');
    const jsonCourses = await courses.json();
   dispatch({type:"RECEIVE_COURSES",payload:jsonCourses});
 } catch(err){
     dispatch({type:"FETCH_COURSES_ERR",payload:err});
 }

})

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
