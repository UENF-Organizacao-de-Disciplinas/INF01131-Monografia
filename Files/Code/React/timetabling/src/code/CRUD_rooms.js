import "./CRUD_rooms.css";
import Select from "react-select";
// import TextField from "@mui/material/TextField";

const temp_img = "./Sala.png";

const options = {
  CRUD: [
    { value: "salas", label: "Salas" },
    { value: "turmas", label: "Turmas" },
    { value: "docentes", label: "Docentes" },
    { value: "discentes", label: "Discentes" },
    { value: "disciplinas", label: "Disciplinas" },
  ],
  roomProps: [
    { value: "monitor", label: "Monitor" },
    { value: "projetor", label: "Projetor" },
    { value: "quadro de giz", label: "Quadro de giz" },
    { value: "quadro branco", label: "Quadro branco" },
  ],
  roomCodes: [
    { value: "P5", label: "105" },
    { value: "CCT", label: "106-A" },
    { value: "P5", label: "106-B" },
    { value: "P5", label: "107" },
    { value: "CCTA", label: "109" },
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

function CRUDrooms() {
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
              newPlaceHolder="Salas"
              options={options.roomCodes}
              isMulti={true}
            />
            <input
              required={true}
              type="number"
              placeholder="Quantidade de cadeiras"
            />
            <input
              required={true}
              type="number"
              placeholder="Quantidade de computadores"
            />
            <MySelectList
              newPlaceHolder="Propriedades da sala"
              options={options.roomProps}
              isMulti={true}
            />
          </div>
          <img className="CRUD-room-placeholderimg" src={temp_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CRUDrooms;
