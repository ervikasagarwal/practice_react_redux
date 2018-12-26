export default const userReducer = ( state={name:"will",age:27}, action)=>{
    
    if(action.type==='CHANGE_USERNAME'){
      state = {...state, name:action.payload}
    }
    else if(action.type==='CHANGE_AGE'){
      state = {...state, age:action.payload}
    }
    return state;
}