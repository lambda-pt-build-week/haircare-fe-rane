import React, { Component } from "react";
import axios from "axios/index";
import styled from "styled-components";
import { connect } from 'react-redux';

import Post from "./Post";
import { fetchPosts } from '../../actions/postActions';
//import * as keys from "../../config/keys";

const UNSPLASH_API = "https://api.unsplash.com/";

class PostContainer extends Component {
  state = {
    posts: [{}]
  };
  componentDidMount() {
    if (process.env.REACT_APP_UNSPLASH_ACCESS_KEY !== undefined
        && !this.props.posts) {
      this.props.fetchPosts();
    } else {
      console.log("nopers");
    }
  }

  render() {
    return (
      <PostGrid>
        {this.props.posts &&
          this.props.posts.map(post => (
            <Post
              key={post.id}
              imageURL={post.imageUrl}
              imageLikes={post.likes}
              username={post.username}
              history={this.props.history}
            />
          ))}
      </PostGrid>
    );
  }
}

const mapStateToProps = ({ postReducer }) => {
  const { posts, fetchingPosts, fetchError } = postReducer;
  console.log(posts);
  return {
    posts, fetchingPosts, fetchError
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer);

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
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
  }
`;
