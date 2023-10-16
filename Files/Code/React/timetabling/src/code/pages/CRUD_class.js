import "../CSS/CRUD_class.css";
import "../CSS/participantList.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import CRUDPageSelection from "../components/PageSelect";
import MySelectList from "../components/MySelectList";

const Timeperiod = () => {
  return (
    <div className="CRUD-timeperiod-properties">
      <div className="CRUD-timeperiod-property">
        Hora de início
        <input placeholder="9:00"></input>
      </div>
      <div className="CRUD-timeperiod-property">
        Tempo de duração
        <input placeholder="2:00"></input>
      </div>
      <div className="CRUD-timeperiod-property">
        Dia
        <MySelectList options={options.days} newPlaceHolder={"Dia da semana"} />
      </div>
      <div className="CRUD-timeperiod-property-room">
        Sala
        <MySelectList
          isLabeled={true}
          options={options.roomCodes}
          newPlaceHolder={"Sala"}
        />
      </div>
    </div>
  );
};

const name = () => {
  var lista = [];
  for (let i = 0; i < options.students.length; i++) {
    const element = options.students[i];
    lista.push(
      <div className="participants-participant">
        {element.value}: {element.label}
      </div>
    );
  }
  return lista;
};

const CRUDParticipants = () => {
  return (
    <div className="participants-container">
      <div className="participants-title">
        <div className="participants-number">{options.students.length}</div>
        <div className="participants-icon">
          <img
            className="participants-icon"
            src={assets.icons.students}
            alt=""
          />
        </div>
      </div>
      <div className="participants-list">
        {/* Make a for loop here later */}
        {name}
        <div className="participants-participant">
          {options.students[0].value}: {options.students[0].label}
        </div>
        <div className="participants-participant">
          {options.students[1].value}: {options.students[1].label}
        </div>
        <div className="participants-participant">
          {options.students[2].value}: {options.students[2].label}
        </div>
        <div className="participants-participant">
          {options.students[3].value}: {options.students[3].label}
        </div>
        <div className="participants-participant">
          {options.students[4].value}: {options.students[4].label}
        </div>
        <div className="participants-participant">
          {options.students[5].value}: {options.students[5].label}
        </div>
        <div className="participants-participant">
          {options.students[6].value}: {options.students[6].label}
        </div>
        <div className="participants-participant">
          {options.students[7].value}: {options.students[7].label}
        </div>
      </div>
    </div>
  );
};

function CRUDclass() {
  return (
    <div className="background">
      <CRUDPageSelection defaultValue={options.CRUD[2]} />
      <div className="CRUD-lateral">
        <div className="CRUD-contain-components">
          <div className="CRUD-Class-properties">
            <div className="CRUD-Class-properties-YearSemester">
              <MySelectList newPlaceHolder={"Ano"} options={options.years} />
              <MySelectList
                newPlaceHolder={"Semestre"}
                options={options.semesters}
              />
            </div>
            <MySelectList
              isLabeled={true}
              newPlaceHolder={"Código: Nome da disciplina"}
              options={options.subjectCodeName}
            />
            <MySelectList
              newPlaceHolder={"Docente"}
              options={options.professors}
            />
            <div className="CRUD-Class-properties-timeperiods">
              <text className="CRUD-Class-properties-timeperiods-title">
                Períodos de horários
              </text>
              <Timeperiod />
              <Timeperiod />
              <img
                className="CRUD-Class-properties-NewTimePeriod-icon"
                src={assets.icons.add}
                alt=""
              />
            </div>
          </div>
          <img className="placeholder-image" src={assets.class} alt="Logo" />
        </div>
        <CRUDParticipants />
      </div>
    </div>
  );
}

export default CRUDclass;
