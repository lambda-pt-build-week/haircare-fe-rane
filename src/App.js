import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
