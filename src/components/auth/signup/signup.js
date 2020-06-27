import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './signup.css'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
          firstname:"",
          lastname:"",
          email:"",
          password:"",
        }
    }
    handleChange =(e)=>{
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
          <div
            style={{ height: "100vh" }}
            className="container-fluid signinwrapper card"
          >
            <h2 className="font-weight-light">Sign up</h2>
            <form className="desk" onSubmit={this.handleSubmit}>
              <div className="d-flex signupname row">
                <div className="form-group col-12  col-sm-6 col-md-6 col-lg-6">
                  <label htmlFor="firstname">
                    <h5>First Name:</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control  signinform"
                    id="firstname"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group col-12  col-sm-6 col-md-6 col-lg-6">
                  <label htmlFor="lastname">
                    <h5>Last Name:</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control signinform"
                    id="lastname"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">
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
                <label htmlFor="password">
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
                  id="exampleCheck1"
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
                  Register
                </button>
              </div>
              <div className="mt-5 d-flex justify-content-end">
                <p className="text-muted small">
                  Already have an account?{" "}
                  <Link to="/signin" className="mx-2">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;