import React, { useState } from "react";
import Modal from "./Modal";
// import foodimg from "https://res.cloudinary.com/bulkfoodtemp/image/upload/v1593462305/nigerianfoodbloggers_20200629_001812_0_wocb7k.jpg";
// @ts-ignore
import "./foods.css";

const FoodSummary = ({ food, show, showModal }) => {
  const [details, setDetails] = useState([{ foodimg:"", foodname: "afang" ,fooddescription:"", foodprice:""}]);
  return (
    <div className="foodsummary" onClick={()=>{
      let detail ={ foodname: food.foodname,
          fooddescription: food.fooddescription,
          foodprice: food.foodprice,
          foodimg: food.foodimg
        };
        setDetails(detail)
      console.log(details)
      }}>
      {show ? (
        <Modal
          show={show}
          details={details}
          foodname={food.foodname}
          showModal={showModal}
          food={food}
        />
      ) : null}
      <div onClick={showModal}>
        <img src={food.foodimg} alt={food.foodname} />
        <div>
          <h3 className="text-center my-3">{food.foodname}</h3>
          <p className="d-none">{food.fooddescription}</p>
        </div>
        <div className="text-center">#{food.foodprice}</div>
      </div>
    </div>
  );
};

export default FoodSummary;
