import "../CSS/CRUD_main.css";
import "../CSS/defaultStyle.css";
import assets from "../../assets/imagesImport";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";

function MainCRUD() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD.crud} />
        <img className="CS-grid-image" src={assets.gridCS} alt="Logo" />
      </div>
    </div>
  );
}

export default MainCRUD;
