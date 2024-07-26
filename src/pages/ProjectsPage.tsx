import {
  ProjectCard1,
  ProjectCard2,
  ProjectCard3,
  ProjectCard4,
} from '../components';
import '../styles/pages/projectPage.scss';

export function ProjectsPage() {
  return (
    <section id="projects-page" className="projects-page">
      <h2 className="title">Projetos</h2>
      <div className="projects-list">

        <ProjectCard1 />
        <ProjectCard2 />
        <ProjectCard3 />
        <ProjectCard4 />
      </div>
    </section>
  );
}
