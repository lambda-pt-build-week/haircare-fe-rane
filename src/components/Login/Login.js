import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


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

  const loginInfo = {
    username: this.state.credentials.username,
    password: this.state.credentials.password
    }

  axios
  .post('https://haircare.herokuapp.com/auth/google', loginInfo)
  .then(res => {
    localStorage.setItem('jwtToken', res.data.token);
    localStorage.setItem('user', JSON.stringify(loginInfo))

    const token = localStorage.getItem('jwtToken');

    if(token) {
      axios.defaults.headers.common['Authorization'] = token;
    }

    token ? this.props.history.push('/protected')
    : this.props.history.push('/')
  })
  .catch(err => {
    console.log(err)
  })
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
          <button className="login-btn">Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {})(Login);
