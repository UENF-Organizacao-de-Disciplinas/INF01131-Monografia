import React from "react";
import { Outlet } from "react-router-dom";
import PageSelect from "../components/PageSelect";
import options from "../temp/options";

const BasePage = () => {
  return (
    <div>
      <PageSelect defaultValue={options.CRUD[0]} />
      <Outlet />
      <t>Footer</t>
    </div>
  );
};

export default BasePage;
