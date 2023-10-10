import "./CRUD_main.css";
import Select from "react-select";

const temp_img = "./GradeCS_grid.png";

const options = [
  { value: "salas", label: "Salas" },
  { value: "turmas", label: "Turmas" },
  { value: "docentes", label: "Docentes" },
  { value: "discentes", label: "Discentes" },
  { value: "disciplinas", label: "Disciplinas" },
];

const MySelectList = (props) => {
  return <Select options={props.options} placeholder={props.newPlaceHolder} />;
};

function CRUDDisciplinas() {
  return (
    <div className="background">
      <div className="contain-components">
        <div className="base-select">
          <MySelectList options={options} newPlaceHolder="Selecionar CRUD" />
        </div>
        <img className="CS-grid-image" src={temp_img} alt="Logo" />
      </div>
    </div>
  );
}

export default CRUDDisciplinas;
