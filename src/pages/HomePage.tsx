import {
  instagramIcon,
  githubIcon,
  linkedinIcon,
  shineIcon,
} from '../assets';
import '../styles/pages/homePage.scss';

function HomePage() {
  return (
    <section id="home-page" className="home-page">
      <div className="background-title">
        <h1 className="title-home-page">OIE, ME CHAMO KARLA KEURIN!</h1>
        <img src={ shineIcon } alt="Shine Icon" />
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/karlakeurin/">
          <img className="social-icon" src={ instagramIcon } alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/karlakeurin/">
          <img className="social-icon" src={ linkedinIcon } alt="LinkedIn" />
        </a>
        <a href="https://github.com/KarlaKeurin">
          <img className="social-icon" src={ githubIcon } alt="GitHub" />
        </a>
      </div>
    </section>
  );
}

export default HomePage;
