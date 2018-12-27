import React, { Component } from 'react';

import Header from './common/header';
import Footer from './common/footer';
import Home from './home';
import Courses from './courses';
import AboutUs from './aboutUs';


import { connect } from "react-redux";

import {Route, Redirect, Switch} from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
                <div>
                        <Route path="/" component={Header} />
                        <Switch>
                            <Route exact strict path="/" component={Home}/>
                            <Route path="/courses" exact component={()=>{ return (this.props.loggedIn?<Courses/> : <div>{alert('you need to sign in first')} <Redirect  to="/"/></div>) }} />
                            <Route path="/aboutUs" exact component={AboutUs} />
                        </Switch>
                        <Route path="/" component={Footer} />
                </div>
           </Router>
      </div>
    );
  }
}
const mapStatetoProps = (store)=>{
  return {
    loggedIn:store.app.loggedIn,
    
  }
};
export default connect(mapStatetoProps)(App);
