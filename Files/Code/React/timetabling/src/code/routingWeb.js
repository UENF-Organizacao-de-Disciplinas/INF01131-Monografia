import { Routes, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import options from "./temp/options";

// Page imports
import MainCRUD from "./pages/CRUD_main";
import CRUDdisciplinas from "./pages/CRUD_disciplinas";
import CRUDprofessors from "./pages/CRUD_professors";
import CRUDrooms from "./pages/CRUD_rooms";
import CRUDstudents from "./pages/CRUD_students";
import CRUDclass from "./pages/CRUD_class";
import MainPage from "./pages/mainpage";
import NoMatch from "./pages/NoPage";

// Component imports
import CRUDPageSelection from "./components/PageSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="CRUD" element={<MainCRUD />} />
        <Route path="CRUD/salas" element={<CRUDrooms />} />
        <Route path="CRUD/turma" element={<CRUDclass />} />
        <Route path="CRUD/alunos" element={<CRUDstudents />} />
        <Route path="CRUD/professores" element={<CRUDprofessors />} />
        <Route path="CRUD/disciplinas" element={<CRUDdisciplinas />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <CRUDPageSelection defaultValue={options.CRUD[6]} />
      <NavLink to=""> mainpage </NavLink>
      <NavLink to="/CRUD"> CRUD_main </NavLink>
      <NavLink to="/CRUD/salas"> rooms </NavLink>
      <NavLink to="/CRUD/turma"> class </NavLink>
      <NavLink to="/CRUD/alunos"> students </NavLink>
      <NavLink to="/CRUD/professores"> professors </NavLink>
      <NavLink to="/CRUD/disciplinas"> disciplinas </NavLink>
    </nav>
  );
};

export default App;
