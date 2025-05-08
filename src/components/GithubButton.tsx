import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

interface GithubButtonProps {
  href: string;
}

export function GithubButton({ href }: GithubButtonProps) {
  useTranslation();
  return (
    <div className="github-button">
      <a href={ href } target="_blank">
        <p className="name">
          <Trans
            i18nKey="github-button.name"
            ns="translation"
          />
        </p>
      </a>
    </div>
  );
}
