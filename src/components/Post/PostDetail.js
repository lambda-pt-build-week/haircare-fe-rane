import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import Carousel from "../Carousel/Carousel";
import StylistData from "../Stylist/StylistData";

class PostDetail extends Component {
  render() {
    let stylist, images;

    if (this.props.selectedPost != null) {
      stylist = this.props.stylists.find(
        stylist => stylist.id === this.props.selectedPost.stylist_id
      );
      images = this.props.posts.filter(
        post =>
          stylist.id === post.stylist_id &&
          post.id != this.props.selectedPost.id
      );

      return (
        <DetailWrapper>
          <Carousel images={this.getImages(images)} />
          <StylistData stylist={stylist} />
        </DetailWrapper>
      );
    } else {
      return <Redirect path="/" />;
    }
  }

  getImages = images => {
    let result = [];

    result.push({
      url: this.props.selectedPost.imageUrl,
      desc: this.props.selectedPost.description
    });

    images.forEach(image =>
      result.push({
        url: image.imageUrl,
        desc: image.description
      })
    );

    //console.log(result);

    return result;
  };
}

const mapStateToProps = state => {
  console.log(state);
  let { postReducer, stylistsReducer } = state;

  return {
    selectedPost: postReducer.selectedPost,
    posts: postReducer.posts,
    stylists: stylistsReducer.stylists
  };
};

export default connect(
  mapStateToProps,
  null
)(PostDetail);

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
  flex-direction: row;
  margin: 15px auto;
`;
