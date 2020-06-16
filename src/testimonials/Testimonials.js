import React, { Component } from 'react';
import './Testimonials.css'
import woman from '../assets/soup1.jpg'

class Testimonials extends Component {
    render() {
        return (
            <div className='d-flex testimonials-wrapper'>
                <div className="text-center font-weight-bold">&lt;</div>
                <div className="card">
                    <img className='testimonials-img'src = {woman} alt='someone'/>
                    <blockquote className='testimonials-bq'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit ab consequatur velit qui incidunt voluptatibus esse natus eligendi reiciendis,
                        ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.
                    </blockquote>
                    <small>Mathilda Imadojiemu</small>
                </div>
                <div className="text-center font-weight-bold">&gt;</div>
            </div>
        );
    }
}

export default Testimonials;