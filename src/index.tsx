import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";

import { Wrapper } from "./component/wrappers/Wrappers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
