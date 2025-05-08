import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { dataScraper } from '../assets';
import { GithubButton } from './GithubButton';
import '../styles/components/dataScraper.scss';

export function DataScraper() {
  useTranslation();
  return (
    <div className="data-scraper card">
      <img className="image" src={ dataScraper } alt="Data Scraper" />
      <div className="description">
        <h3>Data Scraper</h3>
        <p className="text">
        <Trans
          i18nKey="data-scraper.description"
          ns="translation"
        />
        </p>
      </div>
      <div className='skills-container'>
        <p>Fullstack</p>
        <p>Vue</p>
        <p>Python</p>
      </div>
      <GithubButton
        href="https://github.com/KarlaKeurin/data-scraper"
      />
    </div>
  );
}
