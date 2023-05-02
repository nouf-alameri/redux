import { WISH } from "../actionTypes/actionTypes";

const wish = (products) => {
    console.log("kk")
    return {
      type: WISH,
      data: products
    };
  };
  export {wish};