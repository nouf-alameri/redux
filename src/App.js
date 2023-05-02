import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";
import Wish from "./component/Wish";
import Products from "./component/Products";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from "./component/layout";


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
          {/* 
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="billing" element={<Billing />} />
          <Route path="thank" element={<Thank />} />
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
