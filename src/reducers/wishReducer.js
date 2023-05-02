import { WISH } from "../actionTypes/actionTypes";

const initialState = {
    wishList: []
  };

  export const wishReducer = (state = initialState, action) => {
    switch (action.type) {
      case WISH:
        console.log("action.data wish ",action.data)
        return {
          ...state,
          wishList: [...state.wishList,action.data]
        };
        default:
          return state; 
    }
}