import React, { Component } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";

import { getPost } from "../../actions/postActions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0, opacity: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    //this.imageRef.current.addEventListener("onresize", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = height+5;//Math.ceil(height / 10);
    this.setState({ spans, opacity: 1 });
  };

  handleClick = e => {
    this.props.getPost(this.props.id)
    this.props.history.push("/post");
  };

  render() {
    return (
      <div
        onClick={!this.props.static ? e => this.handleClick(e) : null }
        onMouseEnter={e => this.setState({ hover: true })}
        onMouseLeave={e => this.setState({ hover: false })}
        style={{
          opacity: `${this.state.opacity}`,
          gridRowEnd: `span ${this.state.spans}`,
          cursor: "pointer"
        }}
      >
        <PostImage ref={this.imageRef} src={this.props.imageURL} alt="image" />
        {/*{!this.props.static && (*/}
        {/*  <FooterWrapper style={{ opacity: `${this.state.hover ? ".9":".25"}` }}>*/}
        {/*    <div>*/}
        {/*      <FaHeart onClick={e => console.log} /> {this.props.imageLikes}*/}
        {/*    </div>*/}
        {/*    <div style={{ opacity: `${this.state.hover ? ".9":"0"}`}}>/!* this.props.username *!/Username</div>*/}
        {/*  </FooterWrapper>*/}
        {/*)}*/}
      </div>
    );
  }
}

export default connect(
  null,
    { getPost }
)(Post);

const PostWrapper = styled.div`

`;

const PostImage = styled.img`
  //max-width: 300px;
  width: 12vw;
  border-radius: 10px;
    
  @media (max-width: 1000px) {
    width: 25vw;
  }
  @media (max-width: 500px) {
    width: 46vw;
  }
`;

const FooterWrapper = styled.div`
  margin: -33px auto;
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  width: 25vw;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  //padding: 5px;
  z-index: 10;
  @media (max-width: 500px) {
    width: 46vw;
  }
`;
