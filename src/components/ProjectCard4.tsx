import { projectImg4, starLeft } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/projectCard4.scss';

export function ProjectCard4() {
  return (
    <div className="project-4">
      <img src={ starLeft } alt="star-right" className="star-left" />
      <div className="description">
        <h3>Trybe Hotel</h3>
        <p className="text">
          API de reservas de hoteis.
        </p>
        <GithubButton
          href="https://github.com/KarlaKeurin/project-trybe-futebol-clube"
        />
      </div>
      <img className="project-image" src={ projectImg4 } alt="Project 4" />
    </div>
  );
}
