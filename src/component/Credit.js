import React, {useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { credit } from "../actions/paymentAction";


const Credit = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    name:"", number:"", expiryDate:new Date(), cvv:""})
  // useEffect(() => {
  //   console.log(state.cart.cartProducts)
  // }, []);

  return (
    <div>
      <div class="wrapper">
        <div>
        <label for="name">Name On Card</label>
        <input
              required
              type="text"
              onChange={(x)=>setCardDetails({...cardDetails, name:x.target.value})}
              id="name"
              name="name"
            />
        </div>
        <div>
        <label for="number">Card Number</label>
        <input
              required
              type="number"
              onChange={(x)=>setCardDetails({...cardDetails, country:x.target.value})}
              id="number"
              name="number"
            />
        </div>
        <div>
        <label for="eDate">Expiry Date</label>
        <input
              required
              type="text"
              onChange={(x)=>setCardDetails({...cardDetails, expiryDate:x.target.value})}
              id="eDate"
              name="eDate"
            />
        </div>
        <div>
        <label for="number">CVV</label>
        <input
              required
              type="number"
              onChange={(x)=>setCardDetails({...cardDetails, cvv:x.target.value})}
              id="number"
              name="number"
            />
        </div>
       
        <button
            onClick={() => {dispatch(credit(cardDetails, navigate));}}
            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
          >
            Submit
        </button>
        
      </div>
    </div>
  );
};

export default Credit; 