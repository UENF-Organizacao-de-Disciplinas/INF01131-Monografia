import "../CSS/CRUD_professors.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";
import MySelectList from "../components/MySelectList";

function CRUDprofessors() {
  return (
    <div className="background">
      <div className="contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[3]} />
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
