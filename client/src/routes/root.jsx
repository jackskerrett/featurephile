import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";

export async function loader(params) {
  const response = await fetch("/api/features/");
  const features = await response.json();
  return features;
}

export default function Root() {
  const {featureId} = useParams();
  const listOfFeatures = useLoaderData(loader, {featureId});

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
