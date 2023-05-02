import { combineReducers,createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { ProductReducer } from "./reducers/productsReducer";
import { wishReducer } from "./reducers/wishReducer";

const RootReducerstore = 
combineReducers({
	 cart:cartReducer,
	 product:ProductReducer, 
	 wish:wishReducer
})
const store = createStore(RootReducerstore);
export default store;
