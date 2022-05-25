import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SiteProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>
);
