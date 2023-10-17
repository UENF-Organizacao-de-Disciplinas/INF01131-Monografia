import React from "react";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";
import "../CSS/defaultStyle.css";

function MainPage() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD[6]} />
        <h1 className="whiteColor">Welcome to my app!</h1>
        <p className="whiteColor">This is the main page.</p>
      </div>
    </div>
  );
}

export default MainPage;
