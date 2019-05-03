import React, { Component } from 'react';
import styled from "styled-components";
const googleButton = require('../../assets/googlebutton.png');

function Login() {
  return (
    <>
      <a href="https://haircare.herokuapp.com/auth/google">
        <img src={googleButton} alt="google button"/>
      </a>
    </>
  )
}


export default Login;
