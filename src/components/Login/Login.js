import React, { Component } from 'react';

const googleButton = require('../../assets/googlebutton.png');

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  loginChangeHandler = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }


userLogin = event => {
  event.preventDefault();
  }


  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.userLogin}>
          <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.credentials.username}
          onChange={this.loginChangeHandler}
          />
          <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.credentials.password}
          onChange={this.loginChangeHandler}
          />
          <a href="https://haircare.herokuapp.com/auth/google"><img src={googleButton} alt="google button"/></a>
        </form>
      </div>
    )
  }
}

export default Login;
