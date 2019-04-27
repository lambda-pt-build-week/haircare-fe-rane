import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";
import * as keys from "../config/keys";

const UNSPLASH_API = "https://api.unsplash.com/";

class PostContainer extends Component {
  state = {
    images: ""
  };
  componentDidMount() {
    axios
      .get(
        `${UNSPLASH_API}photos/random/?query=hairstyle&&count=10&&client_id=${
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
      <div>
        {this.state.images &&
          this.state.images.map(image => <Post imageURL={image.urls.thumb} />)}
      </div>
    );
  }
}

export default PostContainer;
