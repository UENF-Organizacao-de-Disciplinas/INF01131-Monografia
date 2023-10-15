import Select from "react-select";
import "../CSS/CRUD_professors.css";
import options from "../temp/options";

const temp_img = "./ProfessorPreferenceMap.png";

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
        <div className="CRUD-select">
          <MySelectList
            newPlaceHolder="Selecionar CRUD"
            options={options.CRUD}
            isMulti={false}
          />
        </div>
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
          <img className="CRUD-docentes-placeholderimg" src={temp_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CRUDprofessors;
