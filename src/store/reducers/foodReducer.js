const initState = {
  foods: [
    {foodname:"afang", fooddescription: "food", foodimg:"hanf", foodprice:"300"}
  ],
};

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      console.log("added food", action.food);
      return state;
    case "ADD_FOOD_ERROR":
      console.log("add food error", action.err);
      return state;
    default:
      return state;
  }
};

export default foodReducer;
