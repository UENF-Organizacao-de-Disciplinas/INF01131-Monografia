import Select from "react-select";
import "../CSS/CRUD_main.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";

const MySelectList = (props) => {
  return <Select options={props.options} placeholder={props.newPlaceHolder} />;
};

function MainCRUD() {
  return (
    <div className="background">
      <div className="contain-components">
        <div className="base-select">
          <MySelectList
            options={options.CRUD}
            newPlaceHolder="Selecionar CRUD"
          />
        </div>
        <img className="CS-grid-image" src={assets.gridCS} alt="Logo" />
      </div>
    </div>
  );
}

export default MainCRUD;
