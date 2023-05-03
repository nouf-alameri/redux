import { CHECKOUT } from "../actionTypes/actionTypes";

const checkout = (products,navigate) => {
    
    return{
        type:CHECKOUT,
        data:products, 
        nav: navigate

    }
  };

  export {checkout};