import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import StylistData from '../Stylist/StylistData';

class PostDetail extends Component {
  render() {
    let stylist;

    if (this.props.selectedPost != null) {
      stylist = this.props.stylists.find(stylist => stylist.id === this.props.selectedPost.stylist_id)

      return (<DetailWrapper>
        <Carousel>
          <img src={this.props.selectedPost.imageUrl} alt={this.props.selectedPost.description}/>
          <img src={stylist.profile_picture} alt={stylist.stylist_name}/>
        </Carousel>
        <StylistData stylist={stylist}/>
      </DetailWrapper>);
    } else {
      return <Redirect path="/" />
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  let { postReducer, stylistsReducer } = state;

  return {
    selectedPost: postReducer.selectedPost,
    stylists: stylistsReducer.stylists
  }
}

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
