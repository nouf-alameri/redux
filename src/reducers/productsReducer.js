import { API } from "../actionTypes/actionTypes";

const initialState = {
    productApi: []
  };

  export  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case API:
        console.log('Reducer calling',action.data)
        return {
          ...state,
          productApi: action.data,
        };
        default:
      return state; 
    }
    
}