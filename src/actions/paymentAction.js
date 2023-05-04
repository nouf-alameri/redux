import { PAYMENT, CREDIT } from "../actionTypes/actionTypes";

const payment = (method,navigate) => {
    return {
      type: PAYMENT,
      data:method, 
      nav:navigate
    };
  };

  const credit = (card,navigate) => {
    return {
      type: CREDIT,
      data:card, 
      nav:navigate
    };
  };
  export {payment,credit};