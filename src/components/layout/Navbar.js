import React, { Component } from 'react';
import '../../App.css'
import Mobilenav from './Mobilenav'
import Desktopnav from './Desktopnav'
import Logo from "../../assets/logo.svg";

class Navbar extends Component {
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
      const { background } = this.props
        return (
          <div>
            <nav
              onScroll={this.handleScroll}
              style ={{background: background }}
              className={
                this.state.transform
                  ? "scroll animenav row mr-0 ml-0 w-100"
                  : " animenav row mr-0 ml-0 w-100"
              }
            >
              <img src={Logo} alt="logo" className="col-6 animelogo" />
              {this.state.isMobile ? <Mobilenav /> : <Desktopnav />}
            </nav>
          </div>
        );
    }
}

export default Navbar;