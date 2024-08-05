import "./index.scss";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="content-left">
        <img className="logo" src="./images/logo.png" alt="" />
        <span>React FreiS</span>
      </div>

      <div className="content-right">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
