import Select from "react-select";
import "./componentStyles.css";

const MySelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      isMulti={props.isMulti}
      className="SelectList-base"
      defaultValue={props.defaultValue}
      getOptionLabel={(option) =>
        props.isLabeled ? `${option.value}: ${option.label}` : `${option.label}`
      }
    />
  );
};

export default MySelectList;
