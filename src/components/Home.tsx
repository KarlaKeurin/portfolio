import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import '../styles/components/home.scss';

export function Home() {
  useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  
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
      const currentRef = contentRef.current;
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
    <Link to="/" className="home-link">
      <div className="home-container" ref={ contentRef }>
        <img src={ arrow } alt="Arrow" className="arrow" />
        <h2 className="subtitle">
        <Trans
          i18nKey="home-link.subtitle"
          ns="translation"
        />
        </h2>
      </div>
    </Link>
  );
}