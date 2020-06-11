import React, { Component } from 'react';
import Eatme from './assets/eat-me.svg'
import Credit from './assets/credit-card.png'
import Quick from './assets/quicktime.png'


class Readyfood extends Component {
    constructor(props){
        super(props);
        this.state = {
            details:[
                {
                    id: 0,
                    image: Eatme,
                    description: 'Make a quick order by choosing the food of your choice',
                    btn: 'Order'
                },
                {
                    id: 0,
                    image: Credit,
                    description: 'Pay using your preferred payment option and get a confirmation mail and ',
                    btn: 'Go'
                },
                {
                    id: 0,
                    image: Quick,
                    description: 'Pick your food or get it delivered, its your choice',
                    btn: 'Start'
                }
            ]
        }
    }
    
    render() {
        return (
          <div>
            <h3 className ="readyfood-title text-center font-weight-bold">Just Follow These Steps</h3>
            <div className="container mt-5 d-lg-flex d-md-flex d-block">
              {this.state.details.map((detail) => (
                <div
                  className="col readyfood text-center mx-lg-5 mx-md-4 p-3 py-5"
                  key={detail.id}
                >
                  <img src={detail.image} className="my-3" alt="more" />
                  <div>
                    <p className="my-3">{detail.description}</p>
                    <button className="btn btn-danger  my-3 px-5">
                      {detail.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className='container horul my-5'/>
          </div>
        );
    }
}

export default Readyfood;