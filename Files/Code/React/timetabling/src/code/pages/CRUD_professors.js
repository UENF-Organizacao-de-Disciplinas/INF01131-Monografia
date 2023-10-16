import Select from "react-select";
import "../CSS/CRUD_professors.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";

const MyLabeledSelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      isMulti={props.isMulti}
      getOptionLabel={(option) => `${option.value}: ${option.label}`}
    />
  );
};

const MySelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      isMulti={props.isMulti}
    />
  );
};

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
            <MyLabeledSelectList
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
