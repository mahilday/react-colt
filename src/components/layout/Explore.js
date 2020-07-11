import React, { Component } from "react";
// import { fetchFoods } from '../../store/actions/foodactions'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import FoodsList from "./FoodsList";
import { Search } from "@material-ui/icons";
import "./foods.css";

class Explore extends Component {
  render() {
    const { foods } = this.props;
    //    console.log(this.props);
    return (
      <div className="container explore card">
        <div className="row">
          <form className="col-8 col-xs-10 d-flex">
            <input type="text" placeholder="Search" name="foodsearch" />
            <button className="btn search btn-danger">
              <Search className="searchicon" />
            </button>
          </form>
          <div className="col-12">
            <FoodsList foods={foods} />
          </div>
        </div>
        {/* {foods.map(food => 
                    <div>
                        <img src={ food.foodimg } alt='foodimage'/>
                        <h1>{ food.foodname }</h1>
                        <p>{ food.fooddescription }</p>
                        <p>#{ food.foodprice }</p>
                    </div>
                )} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    foods: state.firestoredb.ordered.foods,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "foods" }])
)(Explore);
