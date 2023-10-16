import "../CSS/CRUD_class.css";
import options from "../temp/options";
import MySelectList from "../components/MySelectList";

const CRUDPageSelection = (props) => {
  return (
    <div className="base-select">
      <MySelectList
        options={options.CRUD}
        newPlaceHolder="Selecionar CRUD"
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default CRUDPageSelection;
