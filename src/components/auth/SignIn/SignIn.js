import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './signin.css'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authactions'

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
        this.props.signIn(this.state)
    }
    render() {
      const { authError } = this.props;
        return (
          <div
            style={{ height: "100vh" }}
            className="container-fluid signinwrapper card"
          >
            <form className="desk" onSubmit={this.handleSubmit}>
              <h3 className="my-3">Sign in</h3>
              <hr/>
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
              { authError ? <p className='text-center mt-3 text-danger'>Login failed</p> : null}
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
const mapStateToProps =(state) =>{
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps =(dispatch)=>{
    return{
      signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);