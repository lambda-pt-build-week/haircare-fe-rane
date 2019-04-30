import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import PostDetail from "./components/Post/PostDetail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/post" component={PostDetail} />>
    </div>
  );
}

export default App;
