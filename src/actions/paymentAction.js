import { PAYMENT } from "../actionTypes/actionTypes";

const payment = (method,navigate) => {
    return {
      type: PAYMENT,
      data:method, 
      nav:navigate
    };
  };
  export {payment};