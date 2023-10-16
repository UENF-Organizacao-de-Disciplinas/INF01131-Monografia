import Select from "react-select";
import "../CSS/CRUD_class.css";
// import "./CRUD_class.css";

const MySelectList = (props) => {
  return (
    <Select
      className="SelectListBase"
      options={props.options}
      placeholder={props.newPlaceHolder}
      defaultValue={props.defaultValue}
    />
  );
};

export default MySelectList;
