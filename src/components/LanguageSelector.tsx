import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { br, es, us } from '../assets';
import '../styles/components/languageSelector.scss';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={languageSelectorRef}>
      <button onClick={() => setOpen(!open)} className="language-btn">
        <img src={i18n.language === 'pt' ? br : i18n.language === 'en' ? us : es} alt="Language" className="flag-icon" />
      </button>
      
      <ul className={`language-list ${open ? 'open' : ''}`}>
        <li onClick={() => changeLanguage('pt')}>
          <img src={br} alt="Portuguese" className="flag-icon" />
        </li>
        <li onClick={() => changeLanguage('en')}>
          <img src={us} alt="English" className="flag-icon" />
        </li>
        <li onClick={() => changeLanguage('es')}>
          <img src={es} alt="Spanish" className="flag-icon" />
        </li>
      </ul>
    </div>
  );
}
