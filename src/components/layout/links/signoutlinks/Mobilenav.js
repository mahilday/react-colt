import React, { Component } from "react";
import Menu from "../../../../assets/menu.svg";
import Menubad from "../../../../assets/menubad.svg";
import { Link } from "react-router-dom";
import {
  HomeRounded,
  ExploreRounded,
  AccountCircleRounded,
  PersonAddRounded,
} from "@material-ui/icons";

class Mobilenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleMenuClick = () => {
    this.setState({ isOpen: true });
  };
  handleMenubadClick = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div className="mobilewrapper">
        <div className={this.state.isOpen ? "navchange" : null}>
          {this.state.isOpen ? (
            <img
              className="menubad"
              onClick={this.handleMenubadClick}
              src={Menubad}
              alt="menu"
            />
          ) : (
            <img
              className="menu"
              onClick={this.handleMenuClick}
              src={Menu}
              alt="menu"
            />
          )}
        </div>
        <div
          className={this.state.isOpen ? "mobile-nav" : "d-none mobile-nav "}
        >
          <ul className=" list-unstyled">
            <li>
              <Link to="/" className="text-dark">
                <HomeRounded />
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="text-dark">
                <ExploreRounded />
                Explore
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-dark">
                <PersonAddRounded />
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-dark">
                <AccountCircleRounded />
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mobilenav;