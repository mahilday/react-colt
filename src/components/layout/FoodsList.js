import React from 'react';
import FoodSummary from './FoodSummary'
import './foods.css'

const FoodsList  =({foods}) =>  {
        return (
            <div className="foodlist">
                {foods && foods.map(food => {
                    return(
                        <FoodSummary className="col-4" food = {food} key={food.foodname}/>
                    )
                })}
            </div>
        );
    }

export default FoodsList;