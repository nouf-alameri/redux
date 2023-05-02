import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../actions/productsAction";
import { addItem, deleteItem } from "../actions/cartAction";
import axios from "axios";
import { wish } from "../actions/wishAction";

const Products = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    axios("https://dummyjson.com/products").then((x) => {
      dispatch(api(x.data.products));
    });
    //
  }, []);

  return (
    <div>
      {" "}
      {state.product.productApi.map((a) => (
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
          <button
            onClick={() => {
              dispatch(addItem(a));
            }}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Add Item to Cart
          </button>
          <br />
          <button
            onClick={() => {
              dispatch(wish(a));
            }}
            style={{ backgroundColor: "yellow", color: "white" }}
          >
            Wish List
          </button>
          <br />
          <button style={{ backgroundColor: "white", color: "red" }}>
            REMOVE CART
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
