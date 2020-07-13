import React, { Component } from "react";
// import { fetchFoods } from '../../store/actions/foodactions'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import FoodsList from "./FoodsList";
import { Search } from "@material-ui/icons";
import "./foods.css";
import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by';

class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
    query: "",
  }
}

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };
  clearQuery = () => {
    this.setState({ query: "" });
  };
  render() {
    const { foods } = this.props;
    const { query } = this.state;

    let showingFood
    if(query){
      const match= new RegExp(escapeRegExp(query), "i")
      showingFood = foods.filter((food)=>match.test(food.foodname, food.fooddescription))
    } else {
      showingFood = foods
    }
    // showingFood.sort(sortBy('foodname'))
    return (
      <div className="container explore card">
        <div className="row">
          <form className="col-8 col-xs-10 d-flex">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              name="foodsearch"
            />
            <button 
            onClick={(event) =>{ 
              event.preventDefault()
               let input = document.querySelector('input').value
              this.updateQuery(input)}} 
              className="btn search btn-danger">
              <Search className="searchicon" />
            </button>
          </form>
          <div className="col-12">
            <FoodsList foods={showingFood} />
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
