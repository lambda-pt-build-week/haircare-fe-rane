import React, { Component } from "react";
import styled from "styled-components";

class Post extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <PostImage ref={this.imageRef} src={this.props.imageURL} alt="image" />
      </div>
    );
  }
}

export default Post;

const PostImage = styled.img`
  width: 200px;
`;
