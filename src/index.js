import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/HomePage/HomePage";
import Destinations from "./components/Destinations/Destinations";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
