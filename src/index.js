import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";

import App from "./App";

import "./bootstrap.min.css";
import "./index.scss";

const tagManagerArgs = {
  gtmId: "GTM-NVKR37B",
  dataLayerName: "PageDataLayer",
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
