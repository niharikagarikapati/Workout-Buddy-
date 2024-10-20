import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Workoutcontextprovider } from "./context/workoutcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Workoutcontextprovider>
      <App />
    </Workoutcontextprovider>
  </React.StrictMode>
);
