import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import { Route, withRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetail from "./components/Post/PostDetail";
import Stylist from "./components/Stylist/Stylist";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  state = {
    jwtToken: "jwtToken"
  }

componentDidMount() {
    console.log(this.props.location.pathname)
     if (this.props.location.pathname != null){
       localStorage.setItem("jwtToken", this.props.location.pathname)
       localStorage.getItem(this.state.jwtToken)
     }
 }

   render() {
    return (
      <div className="App">
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/post" render={props => <PostDetail {...props} />} />
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={Stylist} />
      </div>
    )
  }
}

export default withRouter(App);
