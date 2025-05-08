import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import '../styles/components/intro.scss';

export function Intro() {
  useTranslation();
  return (
    <div className="intro">
        <p className="name"> <span className="italic">KARLA</span> KEURIN <span className='cursor'>|</span></p>
        <h1 className='title'>
          <Trans
            i18nKey="intro.title"
            ns="translation"
            components={{ italic: <span className="italic" /> }}
          />
        </h1>
    </div>
  );
}
