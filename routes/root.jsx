import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/sidebar";

export default (Root) => {
  return (
    <div id="app">
      <Sidebar />
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
};
