import { SIGNUP, LOGIN } from "../actionTypes/actionTypes";




const initialState = {
  user: { username: "", email: "",dob:new Date(),  password: "", confpassword: "" },
  isAva: false
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("signup calling", action.data);
      return {
        ...state,

        user: action.data,
      };

      case LOGIN:
        console.log("login", action.data)
        console.log(state)
        if (state.user.username == action.data.username){ 
          action.nav("/");
      return{
        ...state,
        isAva:true,      
      }

    }
      else {
        return{ 
          ...state,
          isAva:false 
      }
      }
    default:
      return state;
  }
};