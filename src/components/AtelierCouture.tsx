import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { atelierCouture } from '../assets';
import { GithubButton } from './GithubButton';
import '../styles/components/atelierCouture.scss';

export function AtelierCouture() {
  useTranslation();
  return (
    <div className="atelier-couture card">
      <img className="image" src={ atelierCouture } alt="Atelier Couture" />
      <div className="description">
        <h3>Atelier Couture</h3>
        <p className="text">
        <Trans
          i18nKey="atelier-couture.description"
          ns="translation"
        />
        </p>
      </div>
      <div className='skills-container'>
        <p>Fullstack</p>
        <p>TypeScript</p>
        <p>React</p>
        <p>Sass</p>
        <p>Django</p>
      </div>
      <GithubButton href="https://github.com/KarlaKeurin/laud-atelier" />
    </div>
  );
}
