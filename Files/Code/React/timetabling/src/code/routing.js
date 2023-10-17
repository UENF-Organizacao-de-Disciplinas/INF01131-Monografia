import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainCRUD from "./pages/CRUD_main";
import CRUDdisciplinas from "./pages/CRUD_disciplinas";
import CRUDprofessors from "./pages/CRUD_professors";
import CRUDrooms from "./pages/CRUD_rooms";
import CRUDstudents from "./pages/CRUD_students";
import CRUDclass from "./pages/CRUD_class";
import MainPage from "./pages/mainpage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="CRUD" element={<MainCRUD />}>
          <Route path="disciplinas" element={<CRUDdisciplinas />} />
          <Route path="docentes" element={<CRUDprofessors />} />
          <Route path="salas" element={<CRUDrooms />} />
          <Route path="alunos" element={<CRUDstudents />} />
          <Route path="turmas" element={<CRUDclass />} />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
