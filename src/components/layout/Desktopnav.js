import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  HomeRounded,
  ExploreRounded,
  AccountCircleRounded,
  PersonAddRounded,
} from "@material-ui/icons";

class Desktopnav extends Component {
  render() {
    return (
      <ul className="d-flex p-4 list-unstyled ulanime col-8 col-sm-8 text-right">
        <li className="col">
          <Link className="text-white" to="/">
            <HomeRounded className="mx-2" />
            Home
          </Link>
        </li>
        <li className="col">
          <Link className="text-white" to="/explore">
            <ExploreRounded className="mx-2" />
            Explore
          </Link>
        </li>
        <li className="col">
          <Link className="text-white" to="/signup">
            <PersonAddRounded className="mx-2" />
            SignUp
          </Link>
        </li>
        <li className="col">
          <Link className="text-white" to="/signin">
            <AccountCircleRounded className="mx-2" />
            Sign-in
          </Link>
        </li>
      </ul>
    );
  }
}

export default Desktopnav;
