import { Outlet, useLoaderData } from "react-router-dom";
import { getAllFeatures } from "../src/features";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/Navbar";

export function loader({ params }) {
  const features = getAllFeatures();
  return features;
}

export default (Root) => {
  const listOfFeatures = useLoaderData();

  return (
    <div id="app">
      <Navbar />
      <Sidebar features={listOfFeatures}/>
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
};
