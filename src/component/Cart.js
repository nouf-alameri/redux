import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../actions/checkoutAction";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(state)
  //   state
  // }, []);
  const navigate = useNavigate();


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


        </div>
      ))}
      <div>
      <br />
          <button
            onClick={() => {
              dispatch(checkout(state.cart.cartProducts,navigate));
            }}
            style={{ backgroundColor: "Black", color: "white" }}
          >
            Checkout
          </button>
      </div>
    </div>
  );
};

export default Cart;
