import { combineReducers } from "redux";
import { basketReducer } from "./basket";
import { searchReducer } from "./search";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({
  basket: basketReducer,
  search: searchReducer,
  products: productsReducer,
});
