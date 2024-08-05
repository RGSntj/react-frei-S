import { Header } from "../../components/Header";

import "./index.scss";

export function AboutPage() {
  return (
    <>
      <Header />

      <section className="section">
        <h1 className="title">Sobre</h1>

        <p>
          Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é
          ajudar você a aprimorar suas habilidades em Node.js e lógica de
          programação de forma prática e envolvente. Acreditamos que a prática
          constante é essencial para o aprendizado e o aperfeiçoamento em
          tecnologia. Nossa missão é fornecer um ambiente onde você possa
          praticar e testar seus conhecimentos em Node.js e lógica de
          programação, permitindo que você avance no seu próprio ritmo e de
          acordo com suas necessidades.
        </p>

        <p>
          Seja qual for seu nível de experiência, nossa plataforma é o lugar
          ideal para você crescer e desenvolver suas habilidades. Estamos
          ansiosos para ver seu progresso e sucesso!
        </p>

        <div className="container-image">
          <img src="./images/logo-2x.png" className="logo" alt="Logo" />
        </div>
      </section>
    </>
  );
}
