import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/app";
import { AboutPage } from "./pages/sobre";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExercicioOne } from "./pages/exercicio-1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/exercicio-1",
    element: <ExercicioOne />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
