import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';
import App from '../App';

describe('Testando o App', () => {
  it('Verifica se a HomePage é renderizada corretamente', () => {
    renderWithRouter(<App />, { route: '/' });
    const texts = [
      /karla keurin/i,
      /sou uma desenvolvedora full stack com foco em front-end/i,
      /projetos/i,
      /tecnologias/i,
      /currículo/i,
      /instagram/i,
      /linkedin/i,
      /github/i,
      /gmail/i
    ];

    texts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  
    expect(screen.getByAltText(/karla keurin/i)).toBeInTheDocument();
  });

  it('Verifica se o link para a página de projetos é renderizado', () => {
    renderWithRouter(<App />, { route: '/' });
    
    const projectLink = screen.getByRole('link', { name: /projetos/i });
    expect(projectLink).toBeInTheDocument();
    
    projectLink.click();
    expect(window.location.pathname).toBe('/projects');
  });

  it('Verifica se a ProjectsPage é renderiza corretamente', () => {
    renderWithRouter(<App />, { route: '/projects' });

    const texts= [
      /início/i,
      /futebol club/i,
      /atelier couture/i,
      /data scraper/i
    ]

    texts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  })
})
