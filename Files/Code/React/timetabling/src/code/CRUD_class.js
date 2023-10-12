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
};

const MySelectList = (props) => {
  return <Select options={props.options} placeholder={props.newPlaceHolder} />;
};

function CRUDclass() {
  return (
    <div className="background">
      <div className="contain-components">
        <div className="base-select">
          <MySelectList
            options={options.CRUD}
            newPlaceHolder="Selecionar CRUD"
          />
        </div>
        <img className="placeholder-image" src={temp_img} alt="Logo" />
      </div>
    </div>
  );
}

export default CRUDclass;
