import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { payment } from "../actions/paymentAction";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState("")

  return (
    <div>
      <div>
        <input
          checked={payMethod == "Card"}
          type="radio"
          onClick={()=>setPayMethod("Card")}
          id="html"
          name="fav_language"
          value="Card"
        />

        <label for="html">Credit Card</label>
        <input
          checked={payMethod == "COD"}
          onClick={()=>setPayMethod("COD")}
          type="radio"
          id="css"
          name="fav_language"
          value="COD"
        />
        <label for="css">Cash On Delivery</label>
        <button
            type="submit"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => {dispatch(payment(payMethod, navigate))}}
          >
            Submit
            </button>
                  </div>
    </div>
  );
};

export default Payment;
