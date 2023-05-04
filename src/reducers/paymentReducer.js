import { PAYMENT } from "../actionTypes/actionTypes";

const initialState = {
    paymentMethod:"", 
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
      case PAYMENT:
        if (state.paymentMethod == "Card") {
          action.nav("/card");

        }
        else{
          action.nav("/thank");
      return{
        ...state, 
        paymentMethod: action.data
      }; 
    }   

    default:
      return state;
  }
};
