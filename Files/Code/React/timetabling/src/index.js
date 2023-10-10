import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MainCRUD from "./code/CRUD_main";
import CRUDdisciplinas from "./code/CRUD_disciplinas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainCRUD /> */}
    <CRUDdisciplinas />
  </React.StrictMode>
);
