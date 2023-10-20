import { Routes, Route, BrowserRouter } from "react-router-dom";
import options from "./temp/options";

// Page imports
import CRUDdisciplinas from "./pages/CRUD_disciplinas";
import CRUDprofessors from "./pages/CRUD_professors";
import CRUDstudents from "./pages/CRUD_students";
import CRUDrooms from "./pages/CRUD_rooms";
import CRUDclass from "./pages/CRUD_class";
import MainCRUD from "./pages/CRUD_main";
import MainPage from "./pages/mainpage";
import NoMatch from "./pages/NoPage";

const MyRouting = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={options.CRUD.crud.url_path} element={<MainCRUD />} />
        <Route
          path={options.CRUD.crud_salas.url_path}
          element={<CRUDrooms />}
        />
        <Route
          path={options.CRUD.crud_turmas.url_path}
          element={<CRUDclass />}
        />
        <Route
          path={options.CRUD.crud_alunos.url_path}
          element={<CRUDstudents />}
        />
        <Route
          path={options.CRUD.crud_professores.url_path}
          element={<CRUDprofessors />}
        />
        <Route
          path={options.CRUD.crud_disciplinas.url_path}
          element={<CRUDdisciplinas />}
        />
        <Route path={options.CRUD.not_found.url_path} element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouting;
