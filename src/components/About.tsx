import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import '../styles/components/about.scss';

export function About() {
  useTranslation();
  return (
    <div className="about">
      <p className="text">
      <Trans
        i18nKey="about.description"
        ns="translation"
      />
      </p>
    </div>
  );
}