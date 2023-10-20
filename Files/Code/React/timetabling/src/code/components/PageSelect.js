import "./componentStyles.css";
import Select from "react-select";
import options from "../temp/options";
import { useNavigate } from "react-router-dom";

const formatOptionLabel = ({ label }) => (
  <div style={{ display: "flex" }}>{label}</div>
);

const CRUDPageSelection = (props) => {
  const navigate = useNavigate();

  const handleChange = (selectedOption) => {
    navigate(selectedOption.url_path);
  };

  return (
    <div className="CRUD-page-selection">
      <Select
        placeholder={"Selecionar CRUD"}
        options={options.CRUD_list}
        className="SelectList-base"
        defaultValue={props.defaultValue}
        formatOptionLabel={formatOptionLabel}
        onChange={handleChange}
      />
    </div>
  );
};

export default CRUDPageSelection;
