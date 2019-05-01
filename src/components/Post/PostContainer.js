import React, { Component } from "react";
import axios from "axios/index";
import styled from "styled-components";

import Post from "./Post";
import * as keys from "../../config/keys";

const UNSPLASH_API = "https://api.unsplash.com/";

class PostContainer extends Component {
  state = {
    images: ""
  };
  componentDidMount() {
    axios
      .get(
        `${UNSPLASH_API}photos/random/?query=hair&&count=50&&client_id=${
          keys.unsplashAccessKey
        }`
      )
      .then(res => {
        this.setState({ images: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <PostGrid>
        {this.state.images &&
          this.state.images.map(image => (
            <Post
              key={image.id}
              imageURL={image.urls.small}
              imageLikes={image.likes}
              username={image.user.username}
              history={this.props.history}
            />
          ))}
      </PostGrid>
    );
  }
}

export default PostContainer;

const PostGrid = styled.div`
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  grid-gap: 0 5px;
  grid-template-columns: repeat(auto-fit, minmax(12vw, 1fr));
  //border: 2px solid black;
  grid-auto-rows: 10px;
  height: 100vh;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(48vw, 1fr));
  }
`;
