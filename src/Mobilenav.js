import React, { Component } from "react";
import Menu from "./assets/menu.svg";
import Menubad from "./assets/menubad.svg";
import { Link } from "react-router-dom";
import {
  HomeRounded,
  ExploreRounded,
  InfoRounded,
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
        {this.state.isOpen ? (
          <img
            className="dropdown menubad"
            onClick={this.handleMenubadClick}
            src={Menubad}
            alt="menu"
          />
        ) : (
          <img
            className="dropdown menu"
            onClick={this.handleMenuClick}
            src={Menu}
            alt="menu"
          />
        )}
        <div
          className={
            this.state.isOpen
              ? "mobile-nav"
              : "d-none mobile-nav "
          }
        >
          <ul className="bg-light list-unstyled">
            <li>
              <Link to="/" className="text-dark">
                <HomeRounded />
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-dark">
                <ExploreRounded />
                Explore
              </Link>
            </li>
            <li>
              <Link to="/" className="text-dark">
                <PersonAddRounded />
                SignUp
              </Link>
            </li>
            <li>
              <Link to="/" className="text-dark">
                <AccountCircleRounded />
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mobilenav;