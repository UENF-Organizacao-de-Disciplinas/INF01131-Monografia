import "./CRUD_students.css";
import Select from "react-select";
// import TextField from "@mui/material/TextField";

const temp_img = "./Grade_JVFD.png";

const options = {
  CRUD: [
    { value: "salas", label: "Salas" },
    { value: "turmas", label: "Turmas" },
    { value: "docentes", label: "Docentes" },
    { value: "discentes", label: "Discentes" },
    { value: "disciplinas", label: "Disciplinas" },
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

function CRUDstudents() {
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
          <div className="CRUD-properties">
            <MyLabeledSelectList
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
          <img className="CRUD-room-placeholderimg" src={temp_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CRUDstudents;
