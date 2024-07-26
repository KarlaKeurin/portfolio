import { projectImg2, shineLeft } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/projectCard2.scss';

export function ProjectCard2() {
  return (
    <div className="project-2">
      <img src={ shineLeft } alt="Shine Icon" className="shine-left" />
      <div className="description">
        <h3>Laud Atelier</h3>
        <p className="text">
          Site de um atelier de costura.
        </p>
        <GithubButton
          href="https://github.com/KarlaKeurin/project-trybe-futebol-clube"
        />
      </div>
      <img className="project-image" src={ projectImg2 } alt="Project 2" />
    </div>
  );
}
