import React, { Component } from "react";
import ReactAnime from 'react-animejs'

class Svgimage extends Component {
  render() {
      const { Anime } = ReactAnime
    return (
      <Anime
        initial={[
          {
            targets: ".image-svg",
            translateY: [
              { value: 0, duration: 250 },
              { value: 30, duration: 500 },
              { value: 0, duration: 3000 },
              { value: 90, duration: 250 },
              { value: 30, duration: 500 } , 
              { value: 70, duration: 250 },
              { value: 0, duration: 250 }
            ],
            opacity:[
                {value:0.7, duration:1000, easing:'easeInOutSine'},
                {value:1, duration:1000, easing:'easeInSine'}
            ],
            easing:'spring',
            duration: 7000,
            loop: true,
          },
        ]}
      >
        <svg
          width="360"
          height="290"
          viewBox="0 0 360 290"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='image-svg'
        >
          <ellipse
            cx="116"
            cy="115"
            rx="116"
            ry="115"
            fill="url(#paint0_linear)"
          />
          <ellipse
            cx="316"
            cy="135"
            rx="44"
            ry="42"
            fill="url(#paint1_linear)"
            fill-opacity="0.6"
          />
          <ellipse
            cx="243"
            cy="204"
            rx="84"
            ry="86"
            fill="url(#paint2_linear)"
            fill-opacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="116"
              y1="0"
              x2="116"
              y2="230"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D83A3A" stop-opacity="0.9" />
              <stop offset="1" stop-color="#1E1010" stop-opacity="0.99" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="316"
              y1="93"
              x2="316"
              y2="177"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#980606" />
              <stop offset="1" stop-color="#2C0B0B" stop-opacity="0.96" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="279"
              y1="178"
              x2="143"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#980606" />
              <stop offset="1" stop-color="#382121" stop-opacity="0.78" />
            </linearGradient>
          </defs>
        </svg>
      </Anime>
    );
  }
}

export default Svgimage;
