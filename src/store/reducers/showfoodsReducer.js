const initState = {
  foods: []
};

const showfoodsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FOODS":
      console.log("All foods", action.foods);
      return state;
    case "FETCH_FOODS_ERROR":
      console.log("fetchfoods error", action.err);
      return state;
    default:
      return state;
  }
};

export default showfoodsReducer;
