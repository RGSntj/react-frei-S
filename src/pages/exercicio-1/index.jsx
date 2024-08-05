import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.scss";

export function ExercicioOne() {
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
          <h1>Exercício 01 - Cupom de desconto</h1>
        </div>

        <div className="line" />

        <div className="box-container">
          <p>
            Implementar um programa em <strong>Javascript</strong> para calcular
            o valor final de uma compra a partir do valor da compra e do cupom
            de desconto. <strong>O cupom diz quantos reais</strong> terá de
            desconto.
          </p>
        </div>

        <div className="box-cupom">
          <div className="input-group">
            <label htmlFor="valor-pedido">Informe o valor do pedido</label>
            <input placeholder="0" id="valor-pedido" type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="valor-pedido">Informe o valor do pedido</label>
            <input placeholder="0" id="valor-pedido" type="text" />
          </div>
        </div>
      </section>
    </>
  );
}
