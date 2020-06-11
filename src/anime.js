import React, { Component } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";
import Svgimage from './Svgimage';
import { Link } from "react-router-dom";
import ReactAnime from "react-animejs";
import Readyfood from './readyfood';
import Pichange from './pichange/pichange'

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }
  componentDidMount = () => {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updatePredicate);
  };

  updatePredicate = () => {
    this.setState({ isMobile: window.innerWidth < 800 });
  };
  render() {
    return (
      <div>
        <header className="container-fluid nopadding">
          <nav className=" animenav row mr-0 ml-0 w-100">
            <img src={Logo} alt="logo" className="col-6 animelogo" />
            {this.state.isMobile ? <Mobilenav /> : <Desktopnav />}
          </nav>
          <div className="d-flex mt-2 justify-content-center ">
            <Svgimage />
            <div className="col-lg-7 col-md-8 col-sm-10 pt-5 writeup text-white">
              <h1 className="col-md-12 text-center col-sm-10 col-12 p-2">
                MAKE <span className="text-danger">ORDERS</span> THAT{" "}
                <span className="text-danger">COUNT</span>
              </h1>
              <p className="col text-center">
                Lorem elit. Repellendus autem exercitationem in my heart of heart
              </p>
              <div className=" col-12">
                <Link to="#" className="btn text-center orderbtn py-1">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Readyfood />
          <Pichange />
        </main>
      </div>
    );
  }
}

export default Anime;
