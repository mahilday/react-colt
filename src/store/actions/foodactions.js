// import fbConfig from '../../config/fbConfig'
import { getFirestore } from 'redux-firestore'

export const addFood =(food)=>{
    return(dispatch) =>{
        // make an async call to a database
        const firestore = getFirestore()
        firestore.collection("foods").add({
            ...food
        }).then(()=>{
            dispatch({
              type: "ADD_FOOD",
              food  
            })
        }).catch((err)=>{
            dispatch({
                type: 'ADD_FOOD_ERROR', err
            })
        })
    }
}
// export const fetchFoods = (foods = []) =>{
//   return(dispatch, getState, {getFirestore}) => {
//     const firestore = getFirestore()
//     firestore.collection("foods").on("value", (snapshot) => {
//       const vals = snapshot.val()
//       for (var key in vals) {
//         foods.push({
//           ...vals[key],
//           id: key,
//         })
//       }
//     }).then(()=>{
//         dispatch({
//           type: "FETCH_FOODS",
//           foods
//       })
//       }).catch((err)=>{
//         dispatch({
//           type:"FETCH_FOOD_ERROR",
//           err
//         })
//       })
//     };
//   };