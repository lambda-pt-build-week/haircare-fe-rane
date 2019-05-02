import React, { Component } from 'react';


class Login extends Component {
  state = {
    username: "",
    password: ""
  }


userLogin = event => {
  event.preventDefault();

  const loginInfo = {
    username: this.state.username,
    password: this.state.password
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
