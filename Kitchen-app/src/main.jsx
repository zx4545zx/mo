import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage.jsx";
import Homebill from "./Homebill.jsx";
import Homestock from "./Homestock.jsx";
import Home from "./component/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/bill",
    element: <Homebill />,
  },
  {
    path: "/stock",
    element: <Homestock />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
