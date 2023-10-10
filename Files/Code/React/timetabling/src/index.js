import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainCRUD from "./code/CRUD_main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainCRUD />
  </React.StrictMode>
);
