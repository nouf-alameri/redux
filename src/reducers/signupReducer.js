import { SIGNUP } from "../actionTypes/actionTypes";

const initialState = {
  
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("Reducer calling", action.data);
      return {
        ...state,
        
      };
    default:
      return state;
  }
};
