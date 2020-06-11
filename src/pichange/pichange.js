import React, { Component } from 'react';
import chicken from '../assets/chicken.jpg'
import './pichange.css'

class Pichange extends Component {
    render() {
        return (
          <div className="container pichange">
            <h3 className="text-center font-weight-bold"> Our Services </h3>
            <div className="d-flex align-center pichange-content row">
              <div className="col-6 col-xs-8">
                <img src={chicken} alt="igfood" />
              </div>
              <p className="col-6 col-xs-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                sit alias totam earum? Dicta amet saepe aliquid eveniet quo
                similique totam earum. Cum, ut porro? Labore ea delectus aliquam
                rem.
                <br />
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                adipisci tenetur numquam odio, velit, sunt possimus modi nisi
                tempora nihil commodi soluta optio! Dolor possimus fugit
                cupiditate id dolores quam!
              </p>
            </div>
          </div>
        );
    }
}

export default Pichange;