import "../CSS/CRUD_rooms.css";
import Select from "react-select";
import options from "../temp/options";

const temp_img = "./Sala.png";

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
              newPlaceHolder="Sala"
              options={options.roomCodes}
              isMulti={false}
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
