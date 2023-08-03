
import React from  "react";
import ReactDom from "react-dom";

import './index.css';
//import App from './App';
import Apps from "./Counter/Apps";

import App from './tours/App';

ReactDom.render(<App/>, document.getElementById("root"));
ReactDom.render(<Apps/>, document.getElementById("root"));
ReactDom.render(<App/>, document.getElementById("root"));