import { Outlet, useLoaderData } from "react-router-dom";
import { getAllFeatures } from "../src/features";
import Sidebar from "../components/sidebar/sidebar";

export function loader({ params }) {
  const features = getAllFeatures();
  return features;
}

export default (Root) => {
  const listOfFeatures = useLoaderData();

  return (
    <div id="app">
      <Sidebar features={listOfFeatures}/>
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
};
