import { SIGNUP,LOGIN } from "../actionTypes/actionTypes";

const signup = (userObj) => {
    
    return{
        type:SIGNUP,
        data:userObj
    }
  };
const login = (check, navigate) => {

    return {
        type:LOGIN, 
        data: check, 
        nav: navigate

    }
}
  export {signup, login};

  