import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import { AboutPage } from "./pages/sobre";
import { ExercicioOne } from "./pages/exercicio-1";
// import { ExercicioOne } from "./pages/exercicio-1";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={App}></Route>
        <Route path="/about" element={AboutPage}></Route>
        <Route path="/exercicio-1" element={ExercicioOne}></Route>
      </Routes>
    </BrowserRouter>
  );
}
