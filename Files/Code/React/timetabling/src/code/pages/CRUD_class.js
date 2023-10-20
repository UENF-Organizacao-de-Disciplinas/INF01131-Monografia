import "../CSS/CRUD_class.css";
import "../CSS/defaultStyle.css";
import "../CSS/participantList.css";
import options from "../temp/options";
import assets from "../../assets/imagesImport";
import MySelectList from "../components/MySelectList";
import CRUDPageSelection from "../components/PageSelect";

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

const CRUDParticipants = () => {
  return (
    <div className="participants-container">
      <div className="participants-title">
        <div className="participants-number">{options.students.length}</div>
        <div className="participants-icon">
          {/* Something went wrong here */}
          <img
            className="participants-icon"
            src={assets.icons.students}
            alt=""
          />
        </div>
      </div>
      <div className="participants-list">
        <ul>
          {options.students.map((student) => (
            <li key={student.value}>
              <t className="participants-participant">
                {student.value}: {student.label}
              </t>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function CRUDclass() {
  return (
    <div className="background">
      <CRUDPageSelection defaultValue={options.CRUD.crud_turmas} />
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
