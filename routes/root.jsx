import { Outlet, useLoaderData } from "react-router-dom";
import { getAllFeatures } from "../src/features";
import Sidebar from "../components/sidebar/sidebar";

export function loader({ params }) {
  const features = getAllFeatures();
  return features;
}

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
