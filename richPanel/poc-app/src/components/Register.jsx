import React, { Component } from "react";
import "./Register.css"; // Import the CSS file

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isAuthenticated: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // TODO: Make an API call to register the user

    this.setState({
      isAuthenticated: true,
    });
  };

  render() {
    return (
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleChange}
              className="input"
              name="name"
              id="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
              className="input"
              name="email"
              id="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              className="input"
              name="password"
              id="password"
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
