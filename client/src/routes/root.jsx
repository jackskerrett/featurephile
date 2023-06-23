import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";

export async function loader(params) {
  const { featureId } = params
  const response = await fetch(`/api/features/${featureId}`);
  const features = await response.json();
  console.log(features);
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
