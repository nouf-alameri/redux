import { CHECKOUT, ADDRESS } from "../actionTypes/actionTypes";

const initialState = {
  bill: [],
  address: { name:"", country:"", city:"", street:"" }
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT:
      console.log("action.data",action.data)
      action.nav("/checkout");
      return {
        ...state,
        bill: [...state.bill,action.data]
      };
      case ADDRESS:
      
      action.nav("/thank");
      return{
        ...state, 
        address: action.data
      }
    

    default:
      return state;
  }
};
