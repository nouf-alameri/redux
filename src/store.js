import { combineReducers,createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { ProductReducer } from "./reducers/productsReducer";
import { wishReducer } from "./reducers/wishReducer";
import { SignupReducer } from "./reducers/signupReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";

const RootReducerstore = 
combineReducers({
	 cart:cartReducer,
	 product:ProductReducer, 
	 wish:wishReducer,
	 signup:SignupReducer, 
	 checkout:checkoutReducer
})
const store = createStore(RootReducerstore);
export default store;
