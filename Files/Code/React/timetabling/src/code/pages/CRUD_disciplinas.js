import "../CSS/CRUD_disciplinas.css";
import Select from "react-select";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";

const MyLabeledSelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      getOptionLabel={(option) => `${option.value}: ${option.label}`}
      isMulti={props.isMulti}
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

function CRUDDisciplinas() {
  return (
    <div className="background">
      <div className="contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[5]} />
        <div className="CRUD-subjects">
          <MyLabeledSelectList
            newPlaceHolder="Disciplina"
            options={options.subjectCodeName}
            isMulti={false}
          />
          <MySelectList
            newPlaceHolder="Período Esperado"
            options={options.expectedSemester}
          />
          <MySelectList
            newPlaceHolder="Cursos"
            options={options.courses}
            isMulti={true}
          />
          <MyLabeledSelectList
            newPlaceHolder="Requisitos de Disciplina"
            options={options.subjectCodeName}
            isMulti={true}
          />
          <MySelectList
            newPlaceHolder="Docentes"
            options={options.professors}
            isMulti={true}
          />
          <MySelectList
            newPlaceHolder="Requisitos de Sala"
            options={options.roomProps}
            isMulti={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CRUDDisciplinas;
