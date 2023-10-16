import "../CSS/CRUD_rooms.css";
import Select from "react-select";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";

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
        <CRUDPageSelection defaultValue={options.CRUD[1]} />
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
          <img className="CRUD-room-placeholderimg" src={assets.room} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CRUDrooms;
