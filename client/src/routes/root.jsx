import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";

export async function loader({ params }) {
  const response = await fetch("/api/features");
  const features = await response.json();
  return features;
}

export default function Root() {
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
