import { CHECKOUT, ADDRESS } from "../actionTypes/actionTypes";

const checkout = (cart,navigate) => {
    
    return{
        type:CHECKOUT,
        date:cart,
        nav: navigate

    }
  };

const addressData = (add, navigate) =>{
    return {
        type: ADDRESS, 
        data: add, 
        nav: navigate

    }
}

  export {checkout, addressData};