import "../CSS/defaultStyle.css";

import React from "react";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";

function NoPage() {
  return (
    <div className="background">
      <div className="CRUD-contain-components">
        <CRUDPageSelection defaultValue={options.CRUD.not_found} />
        <h1 className="whiteColor">Is this a 404 page?</h1>
        <p className="whiteColor">I guess not.</p>
      </div>
    </div>
  );
}

export default NoPage;
