import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import {
  angular,
  csharp,
  css,
  cypress,
  docker,
  figma,
  git,
  github,
  html,
  javascript,
  jest,
  mysql,
  next,
  node,
  postgresql,
  postman,
  python,
  react,
  redux,
  sass,
  slack,
  typescript,
  vscode,
  vue,
} from '../assets';
import '../styles/components/skills.scss';

const skills = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: react, alt: "React.js" },
  { src: vue, alt: "Vue.js" },
  { src: angular, alt: "Angular" },
  { src: sass, alt: "Sass" },
  { src: redux, alt: "Redux" },
  { src: next, alt: "Next.js" },
  { src: cypress, alt: "Cypress" },
  { src: jest, alt: "Jest" },
  { src: csharp, alt: "C#" },
  { src: python, alt: "Python" },
  { src: node, alt: "Node.js" },
  { src: docker, alt: "Docker" },
  { src: mysql, alt: "MySQL" },
  { src: postgresql, alt: "PostgreSQL" },
  { src: postman, alt: "Postman" },
  { src: github, alt: "GitHub" },
  { src: git, alt: "Git" },
  { src: vscode, alt: "VSCode" },
  { src: figma, alt: "Figma" },
  { src: slack, alt: "Slack" },
];

export function Skills() {
  useTranslation();
  return (
    <div className="skills">
      <h2 className="subtitle">
        <Trans
          i18nKey="skills.subtitle"
          ns="translation"
        />
      </h2>
      <div className="skills-list">
        {skills.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} title={alt} className="icon" />
        ))}
      </div>
    </div>
  );
}
