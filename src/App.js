import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
import { Route, NavLink, withRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import PostDetail from './components/Post/PostDetail'
import Stylist from './components/Stylist/Stylist'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute'
import { connect } from 'react-redux'

import GoogleBtn from './assets/btn_google_signin_light_normal_web.png'
import { fetchStylists } from './actions'
import StylistContainer from './components/Stylist/Stylist'

class App extends Component {
  state = {
    jwtToken: 'jwtToken'
  }

  componentDidMount() {
    console.log(this.props.location.hash.split`#/token?=`.join``)
    if (this.props.location.pathname != null) {
      localStorage.setItem(
        'jwtToken',
        this.props.location.hash.split`#/token?=`.join``
      )
      localStorage.getItem(this.state.jwtToken)
    }

    this.props.fetchStylists()
  }

  render() {
    return (
      <div className="App">
        <NavBar>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
          {!localStorage.getItem(this.state.jwtToken) && (
            <a
              href="https://haircare.herokuapp.com/auth/google"
              //activeClassName="activeNavButton"
            >
              <img src={GoogleBtn} alt="Login with Google" />
            </a>
          )}
        </NavBar>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/post" render={props => <PostDetail {...props} />} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Stylist} />
      </div>
    )
  }
}

export default connect(
  null,
  { fetchStylists }
)(withRouter(App))

const NavBar = styled.div`
  margin: 0 auto;
  padding: 0;
  height: 64px;
  max-width: 800px;
  //width: 90%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
    padding: 24px;
    height: 16px;
    border-radius: 0 0 25% 25%;
  }
  a.activeNavButton {
    background-color: grey;
    color: white;
  }
`
