const defalutState = {
  courses: [
    { id: 1, courseName: 'learn js', author: "Nitesh", language: "JavaScript", length: 10, },
    { id: 2, courseName: 'learn java', author: "bell", language: "go", length: 20, },
    { id: 3, courseName: 'zxy', author: "xyz", language: "python", length: 30, }
  ],
  showCourseForm: false,
  showDetails: true,
  courseBeforEdit: {},
  formHeading: 'Add Course',
  currentEvent: 'add',
  fetching: false,
  fetched: false,
  error: null,
};


export default (state = defalutState, action) => {

  if (action.type === "FETCH_COURSES_FULFILLED") {
    return {
      ...state,
      fetching: false,
      fetched: true,
      courses: action.payload,
    }
  }
  else if (action.type === "FETCH_COURSES") {
    return {
      ...state,
      fetching: true
    };
  }
  else if (action.type === "FETCH_COURSES_REJECTED") {
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
  }
  else if (action.type === 'ADD_NEW_COURSE') {

    const newCourses = state.courses.slice();
    newCourses.push(action.payload);

    return { ...state, courses: newCourses }
  }
  else if (action.type === 'EDIT_COURSE') {
    const newCourses = state.courses.filter((course) => {
      return course.id !== action.payload.id;
    })
    newCourses.push(action.payload);
    state = { ...state, courses: newCourses }
  }
  else if (action.type === 'DELETE_COURSE') {
    const newCourses = state.courses.filter((course) => {
      return course.id !== action.payload;
    })
    state = { ...state, courses: newCourses }
  }
  else if (action.type === 'TOGGLE_FORM') {
    state = { ...state, showCourseForm: action.payload }
  }
  else if (action.type === 'TOGGLE_DETAILS') {
    state = { ...state, showDetails: action.payload }
  }
  else if (action.type === 'COURSE_BEFORE_EDIT') {
    state = { ...state, courseBeforEdit: action.payload }
  } else if (action.type === 'CURRENT_EVENT') {
    state = { ...state, currentEvent: action.payload }
  }
  else if (action.type === "SET_FORM_HEADING") {
    state = { ...state, formHeading: action.payload }
  }
  return state;
}