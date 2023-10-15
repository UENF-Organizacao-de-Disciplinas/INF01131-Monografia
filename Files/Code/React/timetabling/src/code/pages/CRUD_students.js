import Select from "react-select";
import "../CSS/CRUD_students.css";
import options from "../temp/options";

const temp_img = "./Grade_JVFD.png";

const MyLabeledSelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      isMulti={props.isMulti}
      getOptionLabel={(option) => `${option.value}: ${option.label}`}
    />
  );
};

const MySelectList = (props) => {
  return (
    <Select
      placeholder={props.newPlaceHolder}
      options={props.options}
      isMulti={props.isMulti}
    />
  );
};

function CRUDstudents() {
  return (
    <div className="background">
      <div className="contain-components">
        <div className="CRUD-select">
          <MySelectList
            newPlaceHolder="Selecionar CRUD"
            options={options.CRUD}
            isMulti={false}
          />
        </div>
        <div className="CRUD-outro">
          <div className="CRUD-properties">
            <MyLabeledSelectList
              newPlaceHolder="Alunos"
              options={options.students}
              isMulti={false}
            />
            <MySelectList
              newPlaceHolder="Ano de entrada"
              options={options.years}
              isMulti={false}
            />
          </div>
          <img className="CRUD-room-placeholderimg" src={temp_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CRUDstudents;
