import React, { Component } from "react";
import { connect } from "react-redux";

class PostDetail extends Component {
  render() {
    return <div>{this.props.selectedPost.id}</div>;
  }
}

const mapStateToProps = ({ postReducer }) => {
  return {
    selectedPost: postReducer.selectedPost
  }
}

export default connect(
  mapStateToProps,
  null
)(PostDetail);
