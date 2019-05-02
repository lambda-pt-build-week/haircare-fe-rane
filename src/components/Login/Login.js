import React, { Component } from 'react';


class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          />
          <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          />
          <button className="login-btn">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
