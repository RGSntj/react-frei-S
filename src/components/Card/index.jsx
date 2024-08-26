import { Link } from "react-router-dom";

import "./styles.scss";

export function Card({ link, titulo, subtitulo, cor }) {
  return (
    <Link className="card" to={link}>
      <div className={`box ${cor}`}></div>

      <h2>{titulo}</h2>

      <p>{subtitulo}</p>
    </Link>
  );
}
