import React, { Component } from 'react';
import { addFood } from '../../store/actions/foodactions'
import { connect } from 'react-redux'

class AddFood extends Component {
    constructor(props){
        super(props);
        this.state={
            foodimg:"",
            foodname:"",
            fooddescription:"",
            foodprice:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addFood(this.state)
    }
    render() {
        return (
          <div className="container card">
            <form onSubmit={this.handleSubmit} style={{
                margin:"20vh 0"
            }} className="bg-white">
              <div className="form-group">
                <label htmlFor="imagelink">
                  <h6>Add an image link</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="foodimg"
                  onChange={this.handleChange}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="foodname">
                  <h6>Food Name</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="foodname"
                  onChange={this.handleChange}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fooddescription">
                  <h6>Food description</h6>
                </label>
                <textarea
                  rows="5"
                  type="text"
                  className="form-control"
                  id="fooddescription"
                  onChange={this.handleChange}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="foodprice">
                  <h6>Price of food (Naira):</h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="foodprice"
                  onChange={this.handleChange}
                  required="required"
                />
              </div>
              <button type="submit" className="btn px-5 py-3 btn-danger">ADD</button>
            </form>
          </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addFood: (food) => dispatch(addFood(food))
    }
}

export default connect(null, mapDispatchToProps)(AddFood);