import {combineReducers} from 'redux';
import coursesReducer from './courses_reducer';
import appReducer from './app_reducer';

export default  combineReducers({
    courses:coursesReducer,
    app:appReducer,
});
