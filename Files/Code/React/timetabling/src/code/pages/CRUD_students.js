import "../CSS/CRUD_students.css";
import "../CSS/defaultStyle.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";
import MySelectList from "../components/MySelectList";

function CRUDstudents() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[4]} />
        <div className="CRUD-outro">
          <div className="CRUD-properties">
            <MySelectList
              isLabeled={true}
              newPlaceHolder="Alunos"
              options={options.students}
              isMulti={false}
            />
            <MySelectList
              newPlaceHolder="Ano de entrada"
              options={options.years}
              isMulti={false}
            />
          </div>
          <img
            className="CRUD-room-placeholderimg"
            src={assets.gridJV}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CRUDstudents;
