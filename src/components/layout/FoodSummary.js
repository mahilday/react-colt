import React from 'react';
import Modal from './Modal'
// import foodimg from "https://res.cloudinary.com/bulkfoodtemp/image/upload/v1593462305/nigerianfoodbloggers_20200629_001812_0_wocb7k.jpg";
// @ts-ignore
import './foods.css'

const FoodSummary = ({food, show, showModal}) => {
        return (
          <div className="foodsummary">
            {show? <Modal show={show} showModal={showModal} food={food}/> : null}
            <div onClick={showModal}>
              <img src={food.foodimg} alt={food.foodname} />
              <div>
                <h3 className="text-center my-3">{food.foodname}</h3>
                {/* <p>{food.fooddescription}</p> */}
              </div>
              <div className="text-center">#{food.foodprice}</div>
            </div>
          </div>
        );
}

export default FoodSummary;