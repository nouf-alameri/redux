import { API } from "../actionTypes/actionTypes";

const api = (products) => {
    
    return{
        type:API,
        data:products
    }
  };

  export {api};