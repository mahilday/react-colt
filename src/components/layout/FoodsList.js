import React, {Component} from 'react';
import FoodSummary from './FoodSummary'
import './foods.css'


class FoodsList extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }
    showModal=()=>{
        if(this.state.show){
            this.setState({
              show: false,
            })
        } else{
            this.setState({
                show: true
            })
        }
        
    }
    render(){
        const {foods}= this.props;

        return (
            <div className="foodlist">
                {foods && foods.map(food => {
                    return (
                      <div>
                        <FoodSummary
                          className="col-4"
                          show = {this.state.show}
                          showModal = {this.showModal}
                          food={food}
                          key={food.foodname}
                        />
                      </div>
                    );
                })}
            </div>
        );
    }
    }

export default FoodsList;