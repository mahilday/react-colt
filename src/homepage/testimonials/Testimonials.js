import React, { Component } from "react";
import "./Testimonials.css";
import woman from "../../assets/soup1.jpg";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          image: woman,
          testimonial:
            "lorem ipsum dolor sit adescimut elit. impedit ab consequatur velit qui incidunt voluptatibus esse natuseligendi reiciendis, ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.",
          author: "Mathilda Imadojiemu",
        },
        {
          image: woman,
          testimonial:
            "lorem ipsum dolor sit adescimut elit. impedit ab consequatur velit qui incidunt voluptatibus esse natuseligendi reiciendis, ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.",
          author: "Mathilda Imadojiemu",
        },
        {
          image: woman,
          testimonial:
            "lorem ipsum dolor sit adescimut elit. impedit ab consequatur velit qui incidunt voluptatibus esse natuseligendi reiciendis, ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.",
          author: "Mathilda Imadojiemu",
        },
        {
          image: woman,
          testimonial:
            "lorem ipsum dolor sit adescimut elit. impedit ab consequatur velit qui incidunt voluptatibus esse natuseligendi reiciendis, ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.",
          author: "Mathilda Imadojiemu",
        },
        {
          image: woman,
          testimonial:
            "lorem ipsum dolor sit adescimut elit. impedit ab consequatur velit qui incidunt voluptatibus esse natuseligendi reiciendis, ratione corrupti maiores vero, recusandae, quibusdam illum quos. Eum, minima.",
          author: "Mathilda Imadojiemu",
        },
      ],
    };
  }
  render() {
      const {testimonials} = this.state
    return (
      <div className ="test-margin">
        <h3 className="text-center font-weight-bold my-4">Testimonials</h3>
      <div className="d-flex testimonials-wrapper">
        {testimonials.map((testimonial)=>
            <div className="testimonial-card">
              <img className="testimonials-img" src={testimonial.image} alt="someone" />
              <blockquote className="testimonials-bq">
                {testimonial.testimonial}
              </blockquote>
              <small>{testimonial.author}</small>
            </div>
        )}
      </div>
      </div>
    );
  }
}

export default Testimonials;
