import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import "./styles.scss";
import { useState } from "react";

export function ExerciceEleven() {
  const [numero, setNumero] = useState(0);
  const [tabuada, setTabuada] = useState([]);

  function calcularTabuada() {
    let resultado = [];

    for (let i = 1; i <= 10; i++) {
      const calculoMontado = `${numero} x ${i} = ${numero * i}`;

      resultado.push(calculoMontado);
    }

    setTabuada(resultado);
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
          <h1>Exercício 11 - Tabuada</h1>
        </div>
        <div className="line-2" />

        <div className="box-container">
          <p>
            Implemente um programa em Javascript que escreva a tabuada de um
            número informado pelo usuário. A mensagem deve estar no formato ”A x
            B = X”.
          </p>
        </div>

        <div className="main-content">
          <div className="box-cupom">
            <div className="input-group">
              <label htmlFor="valor-numero">Tabuado do:</label>
              <input
                placeholder="0"
                id="valor-numero"
                onChange={(e) => setNumero(e.target.value)}
                type="number"
              />
            </div>
            <button onClick={calcularTabuada}>Executar</button>
          </div>
          {tabuada.map((value) => (
            <p className="valor-tabuada">{value}</p>
          ))}
        </div>
      </section>
    </>
  );
}
