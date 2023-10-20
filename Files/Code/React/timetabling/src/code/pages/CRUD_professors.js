import "../CSS/CRUD_professors.css";
import "../CSS/defaultStyle.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import MySelectList from "../components/MySelectList";
import CRUDPageSelection from "../components/PageSelect";

function CRUDprofessors() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD.crud_professores} />
        <div className="CRUD-outro">
          <div className="CRUD-docentes-properties">
            <MySelectList
              newPlaceHolder="Docente"
              options={options.professors}
              isMulti={false}
            />
            <MySelectList
              isLabeled={true}
              newPlaceHolder="Disciplinas ministradas"
              options={options.subjectCodeName}
              isMulti={true}
            />
          </div>
          <img
            className="CRUD-docentes-placeholderimg"
            src={assets.professorMap}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CRUDprofessors;
