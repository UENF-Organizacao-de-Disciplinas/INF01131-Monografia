import "./CRUD_disciplinas.css";
import Select from "react-select";

const options = {
  CRUD: [
    { value: "salas", label: "Salas" },
    { value: "turmas", label: "Turmas" },
    { value: "docentes", label: "Docentes" },
    { value: "discentes", label: "Discentes" },
    { value: "disciplinas", label: "Disciplinas" },
  ],
  subjectCodeName: [
    { value: "INF00001", label: "Calc 1" },
    { value: "INF00002", label: "Calc 2" },
    { value: "FIS00001", label: "Calc 3" },
    { value: "FIS00002", label: "Algebra Linear" },
    { value: "MAT00001", label: "Geometria Analítica" },
  ],
  expectedSemester: [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ],
  courses: [
    { value: "Ciência da Computação", label: "Ciência da Computação" },
    { value: "Engenharia Civil", label: "Engenharia Civil" },
    {
      value: "Engenharia Metalúrgica e de Materiais",
      label: "Engenharia Metalúrgica e de Materiais",
    },
    { value: "Engenharia Meteorológica", label: "Engenharia Meteorológica" },
    { value: "Engenharia de Produção", label: "Engenharia de Produção" },
    {
      value: "Engenharia de Exploração e Produção de Petróleo",
      label: "Engenharia de Exploração e Produção de Petróleo",
    },
    { value: "Licenciatura em Física", label: "Licenciatura em Física" },
    {
      value: "Licenciatura em Matemática",
      label: "Licenciatura em Matemática",
    },
    { value: "Licenciatura em Química", label: "Licenciatura em Química" },
    {
      value: "Licenciatura em Química à Distância",
      label: "Licenciatura em Química à Distância",
    },
  ],
  professors: [
    { value: "Tang", label: "Tang" },
    { value: "Annabell", label: "Annabell" },
    { value: "Rigoberto", label: "Rigoberto" },
    { value: "Oscar", label: "Oscar" },
    { value: "Elba", label: "Elba" },
  ],
  classRequirements: [
    { value: "Giz", label: "Giz" },
    { value: "Piloto", label: "Piloto" },
    { value: "Monitor", label: "Monitor" },
    { value: "Projetor", label: "Projetor" },
  ],
};

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
        <div className="CRUD-select">
          <MySelectList
            newPlaceHolder="Selecionar CRUD"
            options={options.CRUD}
            isMulti={false}
          />
        </div>
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
            options={options.classRequirements}
            isMulti={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CRUDDisciplinas;
