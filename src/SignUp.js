import React, { Component } from 'react';
import './App.css';

class SignUp extends Component {

  state = {
  name: '',
  password: ''
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value  })
}

handleSubmit = (e) => {
  e.preventDefault()
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(this.state)
  })
  .then(res => res.json())
  .then(data =>{
    if (data.token)  {
      localStorage.token = data.token
      this.props.history.push('/profile')
    }
  })

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
  <input
    placeholder="name"
    type="text"
    name="name"
    onChange={this.handleChange}
    value={this.state.name} />
  <input
    placeholder="password"
    type="password"
    name="password"
    onChange={this.handleChange}
    value={this.state.password} />
  <input type="submit" />
</form>
);
}
}

export default SignUp;
