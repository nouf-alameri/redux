import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  cartProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("action.data",action.data)
      return {
        ...state,
        cartProducts: [...state.cartProducts,action.data]
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};
