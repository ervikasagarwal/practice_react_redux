import React from 'react';
import { connect } from "react-redux";
import CourseTable from './courseTable.js';
import CourseForm from './courseForm.js';

class Courses extends React.Component {
    render() {
        return (
            <div className="row">

                {this.props.showDetails && <CourseTable />}
                {this.props.showCourseForm && <CourseForm />}

            </div>
        );
    }
}

const mapStatetoProps = (store) => {
    return {
        showDetails: store.courses.showDetails,
        showCourseForm: store.courses.showCourseForm,

    }
};

export default connect(mapStatetoProps)(Courses);
