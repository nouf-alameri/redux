import { PAYMENT,CREDIT } from "../actionTypes/actionTypes";

const initialState = {
    paymentMethod:"", 
    card : {name:"", number:"", expiryDate:new Date(), cvv:""}
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
      case PAYMENT:
        console.log("action", action);
        if (action.data == "Card") {
          action.nav("/card");
          return{
            ...state, 
            paymentMethod: action.data
          }; 
        }
        else{
          action.nav("/thank");
      return{
        ...state, 
        paymentMethod: action.data
      }; 
    }  
    
    case CREDIT: 
    action.nav("/thank");
    return{
      ...state, 
      card: action.data
    };  

    default:
      return state;
  }


};
