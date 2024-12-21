import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@aws-amplify/ui-react/styles.css";
import "@cloudscape-design/global-styles/index.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);