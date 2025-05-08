import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { tfc } from '../assets';
import { GithubButton } from './GithubButton';
import '../styles/components/futebolClube.scss';

export function FutebolClube() {
  useTranslation();
  return (
    <div className="futebol-clube card">
      <img className="image" src={ tfc } alt="Atelier Couture" />
      <div className="description">
        <h3>Futebol Club</h3>
        <p className="text">
          <Trans
            i18nKey="futebol-clube.description"
            ns="translation"
          />
        </p>
      </div>
      <div className='skills-container'>
        <p>Back-end</p>
        <p>TypeScript</p>
        <p>Sequelize</p>
      </div>
      <GithubButton
        href="https://github.com/KarlaKeurin/futebol-clube"
      />
    </div>
  );
}
