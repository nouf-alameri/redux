import { CHECKOUT, ADDRESS } from "../actionTypes/actionTypes";

const initialState = {
  bill: [],
  address: { name:"", country:"", city:"", street:"" }
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT:
      console.log("action.data",action)
      action.nav("/checkout");
      console.log("type", action.type);
      return {
        ...state,
        bill: [...state.bill,action]
      };

      case ADDRESS:
      console.log("address: ", action.data);
      action.nav("/payment");
      return{
        ...state, 
        address: action.data
      }
    

    default:
      return state;
  }
};
