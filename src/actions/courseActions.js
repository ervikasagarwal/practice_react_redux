// import axios from "axios"; 
export function fetchCourses(){
//   return function(dispatch){
//       axios.get("")
//       .then((response)=>{
//          dispatch({type:"FETCH_COURSES_FULFILLED", payload:response.data})
//       })
//       .catch((err)=>{
//           dispatch({type:"FETCH_COURSES_REJECTED"});
//       })
//   }
}
export function addBtnClicked(course){
   return function(dispatch){
    dispatch({type:"SET_FORM_HEADING",payload:'Add New Course'});
    dispatch({type:"COURSE_BEFORE_EDIT",payload:{} });
    dispatch({type:"CURRENT_EVENT",payload:'add'});
    dispatch({type:"TOGGLE_DETAILS", payload:false}); // to hide details
    dispatch({type:"TOGGLE_FORM",payload:true});  // to show form

   }
}
export function editBtnClicked(course){
      return function(dispatch){
       dispatch({type:"SET_FORM_HEADING",payload:'Edit Course'});
       dispatch({type:"COURSE_BEFORE_EDIT",payload:course});
       dispatch({type:"CURRENT_EVENT",payload:'edit'});
       dispatch({type:"TOGGLE_DETAILS", payload:false}); // to hide details
       dispatch({type:"TOGGLE_FORM",payload:true});  // to show form
  }
}
export function backBtnClicked(){
    return function(dispatch){
     dispatch({type:"TOGGLE_FORM",payload:false});  // to show form
     dispatch({type:"TOGGLE_DETAILS", payload:true}); // to hide details
   }
}
export function deleteBtnClicked(id){
    return {
        type:"DELETE_COURSE",
        payload:id,
    }
} 

export function addNewCourse(course){
    return {
              type:'ADD_NEW_COURSE',
              payload: course,
    }
}
export function handleSubmit(event, currentEvent, id){
    return function(dispatch){

    event.preventDefault();

    const courseName = event.target[0].value;
    const author = event.target[1].value;
    const language = event.target[2].value;
    const length = event.target[3].value;

    if(currentEvent === 'edit'){

        const editedCourse={ id, courseName, author,language,length};
        //   const res = await fetch('http://localhost:6789/course', {
        //     method: 'put',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(editedCourse),
        //   });
        const res = { ok: true };
        if (res.ok) {
            dispatch({type:"EDIT_COURSE", payload:editedCourse});
            dispatch({type:"ALERT",payload:"edited successfully"});
            dispatch({type:"TOGGLE_FORM",payload:false});  // to show form
            dispatch({type:"TOGGLE_DETAILS", payload:true});
        }
    } else if( currentEvent ==="add") {
        //   const res = await fetch('http://localhost:6789/course', {
        //                         method: 'post',
        //                         headers: {
        //                             'Content-Type': 'application/json',
        //                         },
        //                         body: JSON.stringify({courseName,language,author,length}),
        //                     });
            const res = { ok: 1 }; // temp code
            if (res.ok) {
                // const data = await res.json();
                // const id = data.insertId;
                let id = 10;   //temp code
                const newCourse = { id, courseName, author, language, length };
                id++;
                dispatch({type:"ADD_NEW_COURSE", payload:newCourse});
                dispatch({type:"TOGGLE_FORM",payload:false});  // to show form
                dispatch({type:"TOGGLE_DETAILS", payload:true});
            }
    }
    }
}