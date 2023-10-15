import "./CRUD_class.css";
import Select from "react-select";
import options from "../temp/options";

const MySelectList = (props) => {
  return (
    <Select
      className="SelectListBase"
      options={props.options}
      placeholder={props.newPlaceHolder}
    />
  );
};

const CRUDPageSelection = () => {
  return (
    <div className="page-select">
      <MySelectList options={options.CRUD} newPlaceHolder="Selecionar CRUD" />
    </div>
  );
};

export default CRUDPageSelection;
