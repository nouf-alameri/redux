import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Wish = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {state.wish.wishList.map((a) => (
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

        </div>
      ))}
    </div>
  );
};

export default Wish;
