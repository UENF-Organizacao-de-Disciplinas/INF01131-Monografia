import "./CRUD_professors.css";
import Select from "react-select";

const temp_img = "./ProfessorPreferenceMap.png";

const options = {
  CRUD: [
    { value: "salas", label: "Salas" },
    { value: "turmas", label: "Turmas" },
    { value: "docentes", label: "Docentes" },
    { value: "discentes", label: "Discentes" },
    { value: "disciplinas", label: "Disciplinas" },
  ],
  professors: [
    { value: "Tang", label: "Tang" },
    { value: "Annabell", label: "Annabell" },
    { value: "Rigoberto", label: "Rigoberto" },
    { value: "Oscar", label: "Oscar" },
    { value: "Elba", label: "Elba" },
  ],
  subjectCodeName: [
    { value: "INF00001", label: "Calc 1" },
    { value: "INF00002", label: "Calc 2" },
    { value: "FIS00001", label: "Calc 3" },
    { value: "FIS00002", label: "Algebra Linear" },
    { value: "MAT00001", label: "Geometria Analítica" },
  ],
};

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
