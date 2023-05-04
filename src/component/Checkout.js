import React, {useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addressData } from "../actions/checkoutAction";


const Checkout = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [address, setAddress] = useState({
    name:"", country:"", city:"", street:""
  })
  // useEffect(() => {
  //   console.log(state.cart.cartProducts)
  // }, []);

  return (
    <div>
      <div className="flex justify-center">
        <table className="border w-2/4 p-6">
          <thead>
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
          {state.cart.cartProducts.map((a) => (
              <tr>
                <td className="p-4 border">{a.title}</td>
                <td className="p-4 border">{a.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="wrapper">
        <div>
        <label for="name">Name</label>
        <input
              required
              type="text"
              onChange={(x)=>setAddress({...address, name:x.target.value})}
              id="name"
              name="name"
            />
        </div>
        <div>
        <label for="country">Country</label>
        <input
              required
              type="text"
              onChange={(x)=>setAddress({...address, country:x.target.value})}
              id="country"
              name="country"
            />
        </div>
        <div>
        <label for="city">City</label>
        <input
              required
              type="text"
              onChange={(x)=>setAddress({...address, name:x.target.value})}
              id="city"
              name="city"
            />
        </div>
        <div>
        <label for="street">Street</label>
        <input
              required
              type="text"
              onChange={(x)=>setAddress({...address, street:x.target.value})}
              id="street"
              name="street"
            />
        </div>
        <button
            onClick={() => {dispatch(addressData(address, navigate));}}
            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
          >
            Submit
          </button>
        
      </div>
    </div>
  );
};

export default Checkout; 