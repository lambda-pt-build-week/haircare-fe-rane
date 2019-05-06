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
     <StylistInfo>
      <h1>Schedule an appointment</h1>
      {stylists.map(stylist => {
        return (
          <div>
          <StylistImages key={stylist.id} src={stylist.profile_picture} />
            <StylistTextOne>{stylist.stylist_name}</StylistTextOne>
            <StylistTextTwo>{stylist.location}</StylistTextTwo>
            <StylistButton>Book Now</StylistButton>
          </div>

        )
      })}
     </StylistInfo>
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
margin: 0;
padding: 0;
background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%);
  `;

const StylistTextOne = styled.div`
  padding-top: 5px;
`;

const StylistTextTwo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StylistImages = styled.img`
  height: auto;
  width: 40%;
  padding-top: 30px;
`;

const StylistButton = styled.button`
  background: #3367D6;
  color: white;
  border: none;
  height: 35px;
  width: 20%;
  border-radius: 23px;
  cursor: pointer;
`;
