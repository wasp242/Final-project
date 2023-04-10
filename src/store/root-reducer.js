import { combineReducers } from "redux";
import { basketReducer } from "./basket";

import { productsReducer } from "./products";

export const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});
