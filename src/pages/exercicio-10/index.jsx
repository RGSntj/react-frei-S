import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.scss";

import { withMask } from "use-mask-input";
import { useState } from "react";

export function ExerciceTen() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState([]);

  function calcularImc() {}

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
          <h1>Exercício 10 - Calculo de IMC com histórico</h1>
        </div>
        <div className="line3" />

        <div className="box-container">
          <p>
            Implemente um programa em Javascript que a partir da altura e do
            peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a
            tabela ao lado. Ao final, apresente o IMC e a situação
          </p>
        </div>

        <div className="main-container">
          <form>
            <div className="content">
              <div className="input-group">
                <label htmlFor="altura">Altura</label>
                <input
                  type="text"
                  id="altura"
                  placeholder="1.73"
                  ref={withMask("9.99")}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="peso">Peso</label>
                <input
                  type="text"
                  id="peso"
                  placeholder="55"
                  ref={withMask("99")}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </div>
            </div>

            <button type="button" onClick={calcularImc}>
              Executar
            </button>
          </form>

          <div className="results"></div>
        </div>
      </section>
    </>
  );
}
