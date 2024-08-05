import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.scss";

// import Logo from "../../../";

export default function App() {
  return (
    <>
      <Header />

      <section className="section">
        <h1 className="title">Escolha um treino...</h1>

        <div className="cards-container">
          <Link className="card" to="/exercicio-1">
            <div className="box"></div>

            <h2>Cupom de desconto</h2>

            <p>Exercício 1</p>
          </Link>

          {/* <div className="card">
            <div className="box"></div>

            <h2>Converter Kg/gramas</h2>

            <p>Exercício 2</p>
          </div>

          <div className="card">
            <div className="box"></div>

            <h2>Valor total por quantidade</h2>

            <p>Exercício 3</p>
          </div> */}
        </div>
      </section>
    </>
  );
}
