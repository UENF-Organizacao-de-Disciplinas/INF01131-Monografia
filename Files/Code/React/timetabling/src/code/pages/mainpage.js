import React from "react";
import options from "../temp/options";
import CRUDPageSelection from "../components/PageSelect";

function MainPage() {
  return (
    <div>
      <CRUDPageSelection defaultValue={options.CRUD[6]} />
      <h1>Welcome to my app!</h1>
      <p>This is the main page.</p>
    </div>
  );
}

export default MainPage;
