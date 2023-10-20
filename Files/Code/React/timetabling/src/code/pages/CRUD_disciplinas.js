import "../CSS/CRUD_disciplinas.css";
import "../CSS/defaultStyle.css";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";
import MySelectList from "../components/MySelectList";

function CRUDDisciplinas() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD.crud_disciplinas} />
        <div className="CRUD-subjects">
          <MySelectList
            isLabeled={true}
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
          <MySelectList
            isLabeled={true}
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
