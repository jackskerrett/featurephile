import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css"
import Root, {loader as allFeaturesLoader} from "../routes/root";
import Feature, { loader as featureLoader } from "../routes/feature";
import Index from "../routes/index"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: allFeaturesLoader,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/features/:featureId",
        element: <Feature />,
        loader: featureLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
