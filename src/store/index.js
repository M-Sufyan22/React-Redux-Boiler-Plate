import Store from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(Store, applyMiddleware(thunk));

export default store;