const defaultState={
    loggedIn:true,
    showAlert:false,
    alertMessage:"",
}
export default (state=defaultState,action)=>{
  if(action.type === "AUTHORIZED"){
     return {...state, loggedIn:action.payload}
  } 
  return state;
}