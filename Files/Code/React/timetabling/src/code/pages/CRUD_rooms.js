import "../CSS/CRUD_rooms.css";
import "../CSS/defaultStyle.css";
import assets from "../../assets/imagesImport";
import options from "../temp/options";
import MySelectList from "../components/MySelectList";
import CRUDPageSelection from "../components/PageSelect";

function CRUDrooms() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[1]} />
        <div className="CRUD-outro">
          <div className="CRUD-properties">
            <MySelectList
              newPlaceHolder="Sala"
              options={options.roomCodes}
              isMulti={false}
              isLabeled={true}
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
