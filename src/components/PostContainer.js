import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";
import * as keys from "../config/keys";

const UNSPLASH_API = "https://api.unsplash.com/";

class PostContainer extends Component {
  state = {
    imageURL: ""
  };
  componentDidMount() {
    axios
      .get(
        `${UNSPLASH_API}photos/random/?query=hairstyle&&client_id=${
          keys.unsplashAccessKey
        }`
      )
      .then(res => {
        this.setState({ imageURL: res.data.urls.small });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.imageURL && <Post imageURL={this.state.imageURL} />}
      </div>
    );
  }
}

export default PostContainer;
