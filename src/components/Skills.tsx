import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

// import {
//   angular,
//   csharp,
//   css,
//   cypress,
//   docker,
//   figma,
//   git,
//   github,
//   html,
//   javascript,
//   jest,
//   mysql,
//   next,
//   node,
//   postgresql,
//   postman,
//   python,
//   react,
//   redux,
//   sass,
//   slack,
//   typescript,
//   vscode,
//   vue,
// } from '../assets';
import '../styles/components/skills.scss';

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next',
  'CSS',
  'Sass',
  'Jest',
  'Python',
  'C#',
  'Node',
  'MySQL',
  'Docker',
  'Postman',
  'Figma',
  'GitHub',
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
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="icon">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
