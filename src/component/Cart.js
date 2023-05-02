import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(state)
  //   state
  // }, []);


  return (
    <div>
      {state.cart.cartProducts.map((a) => (
        <div>
          <img
            alt=""
            src={a.thumbnail}
            style={{ width: "300px", height: "300px" }}
          />
          <p>{a.title}</p>
          <p>{a.category}</p>
          <p>{a.description}</p>
          <p>{a.price}</p>
          
          <br />
          <button style={{ backgroundColor: "white", color: "red" }}>
            {" "}
            {"<3"} WISH LIST
          </button>
        </div>
      ))}
      
    </div>
  )
};

export default Cart;
