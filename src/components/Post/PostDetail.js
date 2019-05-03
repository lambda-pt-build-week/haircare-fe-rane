import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import Carousel from '../Carousel/Carousel';
import StylistData from '../Stylist/StylistData';

class PostDetail extends Component {
  render() {
    let stylist;
    if (this.props.selectedPost != null) {
      stylist = this.props.stylists.find(stylist => stylist.id === this.props.selectedPost.stylist_id)
    }
    return (<DetailWrapper>
      <Carousel />
      <StylistData stylist={stylist} />
    </DetailWrapper>);
  }
}

const mapStateToProps = ({ postReducer, stylistReducer }) => {
  return {
    selectedPost: postReducer.selectedPost,
    stylists: stylistReducer.stylists
  }
}

export default connect(
  mapStateToProps,
  null
)(PostDetail);

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
