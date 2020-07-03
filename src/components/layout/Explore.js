import React, { Component } from 'react';
// import { fetchFoods } from '../../store/actions/foodactions'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"
import { compose } from 'redux'

class Explore extends Component {
    render() {
       const { foods } = this.props;
       console.log(foods);
        return (
            <div className="container-fluid card">
                <h1 className="text-dark">Explore</h1>
                {/* {this.props.fetchFoods.map(food => 
                    <div>
                        <img src={ food.foodimg } alt='foodimage'/>
                        <h1>{ food.foodname }</h1>
                        <p>{ food.fooddescription }</p>
                        <p>#{ food.foodprice }</p>
                    </div>
                )} */}
            </div>
        )}
    }
const mapStateToProps = (state) => {
  return {
   foods: state.firestoredb.data.foods
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "foods" }])
)(Explore);