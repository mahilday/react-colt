export const addFood =(food)=>{
    return(dispatch, getState) =>{
        // make an async call to a database
        dispatch({
            type: 'ADD_FOOD', food
        });
    }
}