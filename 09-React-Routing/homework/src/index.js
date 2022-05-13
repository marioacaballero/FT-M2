import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById("root")
);
