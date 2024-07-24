import '../styles/pages/header.scss';

function Header() {
  return (
    <header className="header-container">
      <a href="#home-page" className="logo-text">Karla Keurin</a>
      <nav className="menu-options">
        <a href="#about-page">Sobre mim</a>
        <a href="#projects-page">Projetos</a>
        <a href="#contact-page">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
