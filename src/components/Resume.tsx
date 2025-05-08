import { useEffect, useRef } from "react";
import { useTranslation, Trans } from 'react-i18next';
import { download } from "../assets";
import '../styles/components/resume.scss';

export function Resume() {
  const { i18n } = useTranslation();
  const resumeRef = useRef<HTMLAnchorElement | null>(null);

  const base = import.meta.env.BASE_URL;

  const getResumeFile = () => {
    switch (i18n.language) {
      case 'pt':
        return `${base}resume/curriculo_pt.pdf`;
      case 'en':
        return `${base}resume/resume_en.pdf`;
      case 'es':
        return `${base}resume/curriculo_es.pdf`;
      default:
        return `${base}resume/curriculo_pt.pdf`;
    }
  };
  
  useEffect(() => {
    const isMobile = window.innerWidth <= 1048;
    if (!isMobile) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-mobile");
  
            setTimeout(() => {
              entry.target.classList.remove("animate-mobile");
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    const currentRef = resumeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="resume-container">
      <a
        ref={resumeRef}
        className="resume"
        href={getResumeFile()}
        download
      >
        <img src={ download } alt="Download currículo" className="download" />
        <h2 className="subtitle">
          <Trans
            i18nKey="resume.subtitle"
            ns="translation"
          /> 
        </h2>
      </a>
    </div>
  );
}