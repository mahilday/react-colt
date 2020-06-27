import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './signin.css'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
          email: "",
          password:""
        }
    }
    handleChange =(e)=>{
        this.setState({
          [e.target.id]: e.target.value
        });
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
          <div
            style={{ height: "100vh" }}
            className="container-fluid signinwrapper card"
          >
            <h2>Sign in</h2>
            <form className="desk" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Email">
                  <h5>Email address:</h5>
                </label>
                <input
                  type="email"
                  className="form-control signinform"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="Password">
                  <h5>Password:</h5>
                </label>
                <input
                  type="password"
                  className="form-control signinform"
                  id="password"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <div className="btndiv">
                <button
                  type="submit"
                  className="btn px-lg-5 px-sm-3 align-center px-md-5 btn-danger"
                >
                  Login
                </button>
              </div>
              <div className="mt-5 d-flex justify-content-end">
                <p className="text-muted small">
                  Don't have an account?
                  <Link to="/signup" className="mx-2">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;