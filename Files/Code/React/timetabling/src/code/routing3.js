import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import BasePage from "./pages/basePage";

// Component imports
import CRUDPageSelection from "./components/PageSelect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "CRUD",
        element: <MainCRUD />,
        errorElement: <NoMatch />,
      },
      { path: "CRUD/salas", element: <CRUDrooms />, errorElement: <NoMatch /> },
      {
        path: "CRUD/turmas",
        element: <CRUDclass />,
        errorElement: <NoMatch />,
      },
      {
        path: "CRUD/alunos",
        element: <CRUDstudents />,
        errorElement: <NoMatch />,
      },
      {
        path: "CRUD/professores",
        element: <CRUDprofessors />,
        errorElement: <NoMatch />,
      },
      {
        path: "CRUD/disciplinas",
        element: <CRUDdisciplinas />,
        errorElement: <NoMatch />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

// const Navigation = () => {
//   return (
//     <nav
//       style={{
//         borderBottom: "solid 1px",
//         paddingBottom: "1rem",
//       }}
//     >
//       <CRUDPageSelection defaultValue={options.CRUD[6]} />
//       <NavLink to=""> mainpage </NavLink>
//       <NavLink to="/CRUD"> CRUD_main </NavLink>
//       <NavLink to="/CRUD/salas"> rooms </NavLink>
//       <NavLink to="/CRUD/turmas"> class </NavLink>
//       <NavLink to="/CRUD/alunos"> students </NavLink>
//       <NavLink to="/CRUD/professores"> professors </NavLink>
//       <NavLink to="/CRUD/disciplinas"> disciplinas </NavLink>
//     </nav>
//   );
// };

export default App;
