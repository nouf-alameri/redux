import React from "react";
import { Outlet, Link } from "react-router-dom";


function Layout (){

    return(
        <div>

        <ul className="flex">
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/login">LogIn</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/signup">SignUp</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/cart">Cart</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/wish">Wish List</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/orders">Orders</Link>
            </li>


        </ul>
      <Outlet />
        </div>
    )
}

export default Layout; 