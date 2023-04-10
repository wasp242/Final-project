import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
