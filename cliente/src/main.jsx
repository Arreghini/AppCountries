
import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot en lugar de ReactDOM
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);