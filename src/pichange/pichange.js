import React, { Component } from "react";
import chicken from "../assets/chicken.jpg";


import "./pichange.css";

class Pichange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pichange: chicken,
    };
  }

  handlePicChange = () => {
      this.setState({
        pichange: this.props.pics[this.props.randPic],
      });
    console.log(this.state.pichange)
  };

  render() {
    // const { pics, randPic } = this.props;
    setInterval(this.handlePicChange, 100);

    return (
      <div className="container pichange">
        <h3 className="text-center font-weight-bold"> Our Services </h3>
        <div className="pichange-content row">
          <div className="col">
            <img src={this.state.pichange} alt="igfood" />
          </div>
          <p className="col text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit
            alias totam earum? Dicta amet saepe aliquid eveniet quo similique
            totam earum. Cum, ut porro? Labore ea delectus aliquam rem.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            adipisci tenetur numquam odio, velit, sunt possimus modi nisi
            tempora nihil commodi soluta optio! Dolor possimus fugit cupiditate
            id dolores quam!
          </p>
        </div>
        <p className="text-center font-weight-bold text-secondary">Make an order &gt;&gt; </p>
      </div>
    );
  }
}

export default Pichange;
