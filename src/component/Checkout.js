import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
          {state.checkout.bill.map((a) => (
              <tr>
                <td className="p-4 border">{a.title}</td>
                <td className="p-4 border">{a.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkout; 