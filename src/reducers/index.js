// menggabungkan reducers
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishtListReducer from "./wishtlistReducer";
import productReducer from "./productReducer";

const rootReducers = combineReducers({
    cart: cartReducer,
    wishList: wishtListReducer,
    product: productReducer
})

export default rootReducers