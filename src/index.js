import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/app";
import { AboutPage } from "./pages/sobre";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExercicioOne } from "./pages/exercicio-1";
import { ExerciceTwo } from "./pages/exercicio-2";
import { ExerciceEleven } from "./pages/exercicio-11";
import { ExerciceTen } from "./pages/exercicio-10";
import { ExerciceFour } from "./pages/exercicio-4";

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
  {
    path: "/exercicio-2",
    element: <ExerciceTwo />,
  },
  {
    path: "/exercicio-4",
    element: <ExerciceFour />,
  },
  {
    path: "/exercicio-10",
    element: <ExerciceTen />,
  },
  {
    path: "/exercicio-11",
    element: <ExerciceEleven />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
