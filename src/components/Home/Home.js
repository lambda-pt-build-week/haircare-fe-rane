import React from "react";
import PostContainer from "../Post/PostContainer";
import SearchBar from "../SearchBar";

const Home = props => {
  return (
    <div>
      <SearchBar />
      <PostContainer />
    </div>
  );
};

export default Home;
