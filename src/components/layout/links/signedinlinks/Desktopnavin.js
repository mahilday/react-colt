import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../../../store/actions/authactions'
import '../../../../App.css'
import {
  HomeRounded,
  ExploreRounded,
  // AccountCircleRounded,
  PersonAddRounded,
} from "@material-ui/icons";

class Desktopnavin extends Component {
  render() {
      const {signOut} = this.props;
    return (
      <ul className="d-flex list-unstyled ulanime col-8 col-sm-7 text-right mx-5">
        <li className="col mt-4">
          <Link className="text-white" to="/">
            <HomeRounded className="mx-2" />
            Home
          </Link>
        </li>
        <li className="col mt-4">
          <Link className="text-white" to="/explore">
            <ExploreRounded className="mx-2" />
            Explore
          </Link>
        </li>
        <li className="col mt-4">
          <Link className="text-white" onClick={signOut} to="/">
            <PersonAddRounded className="mx-2" />
            Log Out
          </Link>
        </li>
        <li className="user">
          <Link className="text-white" to="/signin">
            MI
          </Link>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Desktopnavin);
