import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { photo } from '../assets';
import '../styles/pages/homePage.scss';
import {
  About,
  Contact,
  Intro,
  Projects,
  Resume,
  Skills,
  LanguageSelector,
} from '../components';

export function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const isDesktop = window.innerWidth >= 1048;

    if (isDesktop) {
      document.body.style.overflow = 'hidden';
    }

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.home > *');

      gsap.set(blocks, { y: 50, opacity: 0 });
      gsap.to(blocks, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
        onComplete: () => {
          document.body.style.overflow = 'auto';
        },
      });
    }, homeRef);
  
    return () => {
      ctx.revert();
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="home" ref={ homeRef }>
      <Intro />
      <About />
      <div className="photo-container">
        <img src={ photo } alt="Karla Keurin" className="photo" />
      </div>
      <Projects />
      <LanguageSelector />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}
