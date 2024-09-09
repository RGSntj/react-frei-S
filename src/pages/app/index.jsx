import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.scss";
import { Card } from "../../components/Card";

export default function App() {
  const cards = [
    {
      link: "/exercicio-1",
      cor: "laranja",
      titulo: "Cupom de desconto",
      subtitulo: "Exercicio 1",
    },
    {
      link: "/exercicio-2",
      cor: "verde",
      titulo: "Converter Kg/gramas",
      subtitulo: "Exercicio 2",
    },
    {
      link: "/exercicio-4",
      cor: "azul",
      titulo: "Leitura de livro",
      subtitulo: "Exercicio 4",
    },
    {
      link: "/exercicio-10",
      cor: "marrom",
      titulo: "Calculo de IMC com histórico",
      subtitulo: "Exercicio 10",
    },
    {
      link: "/exercicio-11",
      cor: "roxo",
      titulo: "Tabuada",
      subtitulo: "Exercicio 11",
    },
  ];

  return (
    <>
      <Header />
      <section className="section">
        <h1 className="title">Escolha um treino...</h1>

        <div className="cards-container">
          {cards.map((c) => (
            <Card
              link={c.link}
              cor={c.cor}
              titulo={c.titulo}
              subtitulo={c.subtitulo}
            />
          ))}
        </div>
      </section>
    </>
  );
}
