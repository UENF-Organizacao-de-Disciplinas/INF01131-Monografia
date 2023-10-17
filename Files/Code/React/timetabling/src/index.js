import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./code/routingWeb";
// import Routing from "./code/routing";
// import MainPage from "./code/pages/mainpage";
// import MainCRUD from "./code/pages/CRUD_main";
// import CRUDrooms from "./code/pages/CRUD_rooms";
// import CRUDclass from "./code/pages/CRUD_class";
// import CRUDstudents from "./code/pages/CRUD_students";
// import CRUDprofessors from "./code/pages/CRUD_professors";
// import CRUDdisciplinas from "./code/pages/CRUD_disciplinas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Routing /> */}
    {/* <MainCRUD /> */}
    {/* <MainPage /> */}
    {/* <CRUDclass /> */}
    {/* <CRUDrooms /> */}
    {/* <CRUDstudents /> */}
    {/* <CRUDprofessors /> */}
    {/* <CRUDdisciplinas /> */}
  </React.StrictMode>
);
