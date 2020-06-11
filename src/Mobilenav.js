import React, { Component } from 'react';
import Menu from './assets/menu.svg'
import Menubad from './assets/menubad.svg'
import { Link } from 'react-router-dom'
import {
  HomeRounded,
  ExploreRounded,
  InfoRounded,
  AccountCircleRounded,
  PersonAddRounded,
} from "@material-ui/icons";

class Mobilenav extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }
    render() {
        return (
          <div>
            {this.state.isOpen ? (
              <img
                className="dropdown menu"
                onClick={() => alert("clicked")}
                src={Menubad}
                alt="menu"
              />
            ) : (
              <img
                className="dropdown menu"
                onClick={() => alert("clicked")}
                src={Menu}
                alt="menu"
              />
            )}
            <div className="bg-light mobile-nav">
              <ul className="list-unstyled">
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