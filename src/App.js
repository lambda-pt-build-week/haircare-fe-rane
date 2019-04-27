import React from "react";
import "./App.css";

import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
    </div>
  );
}

export default App;
