import { ADDRESS } from "../actionTypes/actionTypes";

const initialState = {
  // bill: [],
  address: { name:"", country:"", city:"", street:"" }
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADDRESS:
      console.log("address: ", action.data);
      action.nav("/payment");
      return{
        ...state, 
        address: action.data
      };    

    default:
      return state;
  }
};
