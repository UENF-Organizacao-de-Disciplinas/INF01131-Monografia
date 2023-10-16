import "../CSS/CRUD_main.css";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";
import options from "../temp/options";

function MainCRUD() {
  return (
    <div className="background">
      <div className="contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[0]} />
        <img className="CS-grid-image" src={assets.gridCS} alt="Logo" />
      </div>
    </div>
  );
}

export default MainCRUD;
