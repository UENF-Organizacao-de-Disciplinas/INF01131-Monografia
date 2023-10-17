import options from "../temp/options";
import MySelectList from "./MySelectList";
import "./componentStyles.css";

const CRUDPageSelection = (props) => {
  return (
    <div className="CRUD-page-selection">
      <MySelectList
        options={options.CRUD}
        newPlaceHolder="Selecionar CRUD"
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default CRUDPageSelection;
