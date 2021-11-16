import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Windmill } from "@windmill/react-ui";

ReactDOM.render(
  <React.StrictMode>
    <Windmill>
      <App />
    </Windmill>
  </React.StrictMode>,
  document.getElementById("root")
);
