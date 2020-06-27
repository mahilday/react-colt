const initState = {};

const foodReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_FOOD':
        console.log('added food', action.food)
    }
  return state;
};

export default foodReducer;
