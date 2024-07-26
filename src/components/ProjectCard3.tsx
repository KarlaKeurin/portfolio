import { projectImg3, shineRight } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/projectCard3.scss';

export function ProjectCard3() {
  return (
    <div className="project-3">
      <img src={ shineRight } alt="Shine Icon" className="shine-right" />
      <img className="project-image" src={ projectImg3 } alt="Project 3" />
      <div className="description">
        <h3>Todas as Comidas</h3>
        <p className="text">
          Site com as receitas da influenciadora Fulana
        </p>
        <GithubButton
          href="https://github.com/KarlaKeurin/project-trybe-futebol-clube"
        />
      </div>
    </div>
  );
}
