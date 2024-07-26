/* eslint-disable max-len */
import {
  javascript,
  typescript,
  react,
  python,
  csharp,
  figma,
  nodejs,
  sequelize,
  docker,
  mysql,
  html,
  css,
  photoAbout,
} from '../../public';
import '../styles/pages/aboutPage.scss';

export function AboutPage() {
  return (
    <section id="about-page" className="about-page">
      <h2 className="phrase-about">
        Sou uma desenvolvedora web apaixonada por tudo que envolve tecnologia e criatividade.
      </h2>

      <div className="about">

        <div className="about-me-img">
          <h3 className="text-about">
            Tive meu primeiro contato com tecnologia foi durante o curso de Biotecnologia na UFPB, em 2019, quando participei de uma palestra sobre bioinformática. Então, em 2022, mergulhei no mundo da programação através do curso de Desenvolvimento Web na Trybe. Lá, adquiri conhecimento em diversas tecnologias, além de desenvolver minhas soft skills em projetos práticos e colaborativos.
            Meu maior objetivo é continuar desenvolvendo minhas habilidades e contribuindo para o desenvolvimento de soluções que impactem positivamente o mundo. Acredito muito no trabalho em equipe, na coletividade e no respeito e vejo a tecnologia como um meio de influenciar e transformar a vida das pessoas.
          </h3>
          <img src={ photoAbout } alt="Foto de Karla Keurin" />
        </div>

        <div className="my-skills">
          <h2>Minhas skills</h2>
          <div className="icons">
            <img src={ javascript } alt="JavaScript icon" />
            <img src={ react } alt="" />
            <img src={ typescript } alt="TypeScript icon" />
            <img src={ python } alt="Python icon" />
            <img src={ csharp } alt="C# icon" />
            <img src={ figma } alt="Figma icon" />
            <img src={ css } alt="CSS icon" />
            <img src={ nodejs } alt="NodeJs icon" />
            <img src={ sequelize } alt="Sequelize icon" />
            <img src={ docker } alt="Docker icon" />
            <img src={ mysql } alt="MySQL icon" />
            <img src={ html } alt="HTML icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
