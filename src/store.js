import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import reduxThunk from "redux-thunk";

const middlewares = applyMiddleware(reduxThunk)
const store = createStore(rootReducers, middlewares)

export default store