import React, { Component } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";
import Svgimage from "./Svgimage";
import { Link } from "react-router-dom";
// import ReactAnime from "react-animejs";
import Readyfood from "./readyfood";
import Pichange from "./pichange/pichange";
import chicken from "./assets/chicken.jpg";
import jollof from "./assets/jollof1.jpg";
import soup1 from "./assets/soup1.jpg";
import soup2 from "./assets/soup2.jpg";
import soup3 from "./assets/soup3.jpg";
import Parallax from "./Parallax/Parallax"
import Testimonials from './testimonials/Testimonials'

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      transform: false,
    };
  }
  componentDidMount = () => {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updatePredicate);
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
   const scrollY= window.scrollY;
   if(scrollY >= 10){
      this.setState({
        transform: true
      })
   } else{
     console.log('mang')
     this.setState({
       transform: false
     })
   }
  };

  updatePredicate = () => {
    this.setState({ isMobile: window.innerWidth < 800 });
  };
  render() {
    const pics = [chicken, jollof, soup1, soup2, soup3];
    return (
      <div>
        <header className="container-fluid nopadding">
          <nav
            onScroll={this.handleScroll}
            className = {this.state.transform ? "scroll animenav row mr-0 ml-0 w-100" : " animenav row mr-0 ml-0 w-100"}
          >
            <img src={Logo} alt="logo" className="col-6 animelogo" />
            {this.state.isMobile ? <Mobilenav /> : <Desktopnav />}
          </nav>
          <div className="d-flex justify-content-center ">
            <Svgimage />
            <div className="col-lg-7 col-md-8 col-sm-10 pt-5 writeup text-white">
              <h1 className="col-md-12 text-center col-sm-10 col-12 p-2">
                MAKE <span className="text-danger">ORDERS</span> THAT{" "}
                <span className="text-danger">COUNT</span>
              </h1>
              <p className="col text-center">
                Lorem elit. Repellendus autem exercitationem in my heart of
                heart
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
          <Pichange pics = {pics}
            randPic = {Math.floor(Math.random() * pics.length)} />
          <Parallax />
          <Testimonials />
        </main>
      </div>
    );
  }
}

export default Anime;
