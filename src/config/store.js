import { createStore, combineReducers } from "redux";
import cartReducer from "../features/cart/reducer";
import idReducer from "../features/idReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  selectedItem: idReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
