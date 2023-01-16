import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";

const store = createStore(reducer);

const root = createRoot(document.getElementById(`root`));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
