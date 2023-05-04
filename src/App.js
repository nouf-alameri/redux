import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";
import Wish from "./component/Wish";
import Products from "./component/Products";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from "./component/layout";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Checkout from "./component/Checkout";
import Thank from "./component/Thank";
import Payment from "./component/Payment";
import Credit from "./component/Credit";



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Products/>} />
          <Route path="cart" element={<Cart />} />  
          <Route path="wish" element={<Wish />} /> 
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="thank" element={<Thank />} />
          <Route path="payment" element={<Payment />} />
          <Route path="card" element={<Credit />} />

          {/* 
          
          <Route path="orders" element={<Orders />} />
          <Route path="details" element={<OrderDetail />} /> */}


        </Route>   
        </Routes>
    </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
