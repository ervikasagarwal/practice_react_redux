import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="row header bg-secondary pb-2">
            <div className="col-sm-10 pt-3">
                <Link className=" pl-3 text-white" to="/">Home</Link>
                <Link className=" pl-3 text-white" to="/aboutUs">About Us</Link>
                <Link className="pl-3 text-white" to="/courses">Courses</Link>
            </div>
            <div className="col-sm-2 pt-2">

                {!(props.isloggedOut) && <button className="btn btn-danger  " onClick={props.logoutBtnClicked} >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                }
            </div>
        </div>

    );
}
export default Header;
