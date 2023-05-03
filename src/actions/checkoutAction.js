import { CHECKOUT, ADDRESS } from "../actionTypes/actionTypes";

const checkout = (products,navigate) => {
    
    return{
        type:CHECKOUT,
        data:products, 
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