import { arrowIcon } from '../../public';

interface GithubButtonProps {
  href: string;
}

export function GithubButton({ href }: GithubButtonProps) {
  return (
    <div className="github-button">
      <a href={ href }>
        <p className="name">Ver no GitHub</p>
        <img className="github-icon" src={ arrowIcon } alt="GitHub" />
      </a>
    </div>
  );
}
