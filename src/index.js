import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import movieReducer from "./Reducer";
import ReduxThunk from "redux-thunk";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const store = createStore(movieReducer, applyMiddleware(ReduxThunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);