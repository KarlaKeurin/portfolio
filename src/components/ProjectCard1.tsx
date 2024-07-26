import { projectImg1, starRight } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/projectCard1.scss';
import '../styles/components/githubButton.scss';

export function ProjectCard1() {
  return (
    <div className="project-1">
      <img src={ starRight } alt="star-right" className="star-right" />
      <img className="project-image" src={ projectImg1 } alt="Project 1" />
      <div className="description">
        <h3>Trybe Futebol Clube</h3>
        <p className="text">
          O TFC é um site informativo sobre partidas e classificações de futebol!
        </p>
        <GithubButton
          href="https://github.com/KarlaKeurin/project-trybe-futebol-clube"
        />
      </div>
    </div>
  );
}
