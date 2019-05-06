import React, {Component} from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchStylists } from '../../actions';

class Stylist extends Component {
  componentDidMount() {
   this.props.fetchStylists();
 }

 render() {
   const { stylists = [] } = this.props
   {console.log(stylists)}
   return (
     <div>
      <h1>Schedule an appointment</h1>
      {stylists.map(stylist => {
        return (
          <StylistInfo>
          <StylistImages key={stylist.id} src={stylist.profile_picture} />
          <div>{stylist.stylist_name}</div>
          <div>{stylist.location}</div>
          <button>Book Now</button>
          </StylistInfo>

        )
      })}
     </div>
   )
 }

}


const mapStateToProps = state => {
  console.log(state)
  return {
    stylists: state.stylistsReducer.stylists
  }
}

export default connect(mapStateToProps, { fetchStylists } )(Stylist);

const StylistInfo = styled.div`
  `;

const StylistImages = styled.img`
  height: auto;
  width: 15%;
`;
