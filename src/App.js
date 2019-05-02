import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetail from "./components/Post/PostDetail";
import Stylist from "./components/Stylist/Stylist";
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/post" render={props => <PostDetail {...props} />} />
      <Route path="/login" component={Login}/>
      <Route exact path="/protected" component={Stylist} />
    </div>
  );
}

export default App;
