import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainCRUD from "./code/pages/CRUD_main";
import CRUDdisciplinas from "./code/pages/CRUD_disciplinas";
import CRUDprofessors from "./code/pages/CRUD_professors";
import CRUDrooms from "./code/pages/CRUD_rooms";
import CRUDstudents from "./code/pages/CRUD_students";
import CRUDclass from "./code/pages/CRUD_class";
import MainPage from "./code/pages/mainpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainCRUD /> */}
    {/* <CRUDdisciplinas /> */}
    {/* <CRUDprofessors /> */}
    {/* <CRUDrooms /> */}
    <CRUDstudents />
    {/* <CRUDclass /> */}
    {/* <MainPage /> */}
  </React.StrictMode>
);
