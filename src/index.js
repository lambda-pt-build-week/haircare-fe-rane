import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { stylistsReducer } from "./reducers";
import { postReducer } from './reducers/postReducer';
import { BrowserRouter as Router } from "react-router-dom";

const rootReducer = combineReducers({ stylistsReducer, postReducer })

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
