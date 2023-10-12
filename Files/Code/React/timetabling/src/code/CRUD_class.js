import "./CRUD_class.css";
import Select from "react-select";

const temp_img = "./Turma.png";

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
  roomCodes: [
    { value: "P5", label: "105" },
    { value: "CCT", label: "106-A" },
    { value: "P5", label: "106-B" },
    { value: "P5", label: "107" },
    { value: "CCTA", label: "109" },
  ],
  days: [
    { value: "SEG", label: "SEG" },
    { value: "TER", label: "TER" },
    { value: "QUA", label: "QUA" },
    { value: "QUI", label: "QUI" },
    { value: "SEX", label: "SEX" },
  ],
  students: [
    { value: "00119110001", label: "Abacate de Souza" },
    { value: "00119110002", label: "Beterrabinha Ferreira Silva" },
    { value: "00119110003", label: "Cenourinha da Graça Pinheiro" },
    { value: "00119110004", label: "Damasco Figueiredo das Neves" },
    { value: "00119110005", label: "Elefante Silva" },
    { value: "00119110006", label: "Feliz Augusto Degel" },
    { value: "00119110007", label: "Gato Menezes Oliveira" },
    { value: "00119110008", label: "Helicóptero Dias Ribeiro" },
  ],
  years: [
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ],
  semesters: [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "Verão", label: "Verão" },
  ],
};
/* 
- Select creatable: ano
- Select: semestre
- Select label: Código: nome da disciplina
- Select: docente
- Chip dos dados
- Períodos de horários
    - int hora: hora início
    - int hora: duração
    - Select: dia
    - Select label: sala
    - Visualização de participantes
*/

const MySelectList = (props) => {
  return <Select options={props.options} placeholder={props.newPlaceHolder} />;
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

const CRUDPageSelection = () => {
  return (
    <div className="base-select">
      <MySelectList options={options.CRUD} newPlaceHolder="Selecionar CRUD" />
    </div>
  );
};

function CRUDclass() {
  return (
    <div className="background">
      <div className="contain-components">
        <CRUDPageSelection />
        <div className="CRUD-Class-properties">
          <MySelectList options={options.years} newPlaceHolder={"Ano"} />
          <MySelectList
            options={options.semesters}
            newPlaceHolder={"Semestre"}
          />
          <MyLabeledSelectList
            options={options.subjectCodeName}
            newPlaceHolder={"Código: Nome da disciplina"}
          />
          <MySelectList
            options={options.professors}
            newPlaceHolder={"Docente"}
          />
          <img className="placeholder-image" src={temp_img} alt="Logo" />
          <div className="CRUD-class-timeperiods"></div>
        </div>
      </div>
    </div>
  );
}

export default CRUDclass;
