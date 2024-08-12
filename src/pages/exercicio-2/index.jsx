import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import "./styles.scss";
import { useState } from "react";

export function ExerciceTwo() {
  const [valorKg, setValorKg] = useState(0);
  const [resultado, setResultado] = useState(0);

  function converterKgParaGramas() {
    const gramas = valorKg * 1000;

    setResultado(gramas);
  }

  return (
    <>
      <Header />

      <section className="container">
        <div className="title-container">
          <Link to="/">
            <img
              className="back-button"
              src="./images/back-button.png"
              alt=""
            />
          </Link>
          <h1>Exercício 02 - Converter Kg/gramas</h1>
        </div>
        <div className="line-2" />

        <div className="box-container">
          <p>
            Implementar um programa em Javascript para converter kilos em
            gramas.
          </p>
        </div>

        <div className="main-content">
          <div className="box-cupom">
            <div className="input-group">
              <label htmlFor="valor-gramas">Valor em gramas</label>
              <input
                placeholder="0"
                id="valor-gramas"
                onChange={(e) => setValorKg(e.target.value)}
                type="number"
              />
            </div>
            <button onClick={converterKgParaGramas}>Executar</button>
          </div>

          <p>Resultado: O total é {resultado}</p>
        </div>
      </section>
    </>
  );
}
