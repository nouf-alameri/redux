import { CHECKOUT } from "../actionTypes/actionTypes";

const initialState = {
  bill: [],
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

    default:
      return state;
  }
};
