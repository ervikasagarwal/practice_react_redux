import React from 'react';
import { connect } from "react-redux"; 
import * as actions from '../../actions/courseActions'; 

const CourseTable  = (props)=>{
        const courseRows = props.courses.map((course)=>{
              return (
                      <div className="col-sm-12 row border-bottom pt-2 pb-2">
                         <div className="col-sm-2">{course.courseName}</div>
                         <div className="col-sm-2">{course.author}</div>
                         <div className="col-sm-2">{course.language}</div>
                         <div className="col-sm-2">{course.length}</div>
                         <div className="col-sm-2">
                            <button className="btn btn-primary" onClick={()=>props.dispatch(actions.editBtnClicked(course))}>Edit</button>
                         </div>
                         <div className="col-sm-2">
                            <button className="btn btn-danger" onClick={()=>props.dispatch(actions.deleteBtnClicked(course.id))}>Delete</button>
                         </div>
                      </div>
              )
        }) 
        return(
           <div className="row col-sm-12">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="pt-4 pl-4 ">Courses</h3>
                        <div className="col-sm-12 row row border-bottom pt-2 pb-3">
                            <div className="col-sm-2 font-weight-bold">Course</div>
                            <div className="col-sm-2 font-weight-bold">Author</div>
                            <div className="col-sm-2 font-weight-bold">Language</div>
                            <div className="col-sm-2 font-weight-bold">Length</div>
                        </div>
                        { courseRows}
                        <div className="col-sm-12 pt-3">
                           <button className="btn btn-primary" onClick={()=>props.dispatch(actions.addBtnClicked())}>Add Course</button>
                        </div>
                    </div>  
            </div>
           
        );
}

const mapStatetoProps = (store) => {
    return {
        courses:store.courses.courses,
    }
};

export default connect(mapStatetoProps)(CourseTable);
