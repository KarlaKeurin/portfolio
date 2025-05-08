import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/pages/projectsPage.scss';
import {
  AtelierCouture,
  FutebolClube,
  DataScraper,
  Home,
} from '../components';

export function ProjectsPage() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const isDesktop = window.innerWidth >= 1048;
  
    if (isDesktop) {
      document.body.style.overflow = 'hidden';
    }
  
    const images = projectsRef.current?.querySelectorAll('img') || [];
  
    const waitForImagesToLoad = () =>
      Promise.all(
        Array.from(images).map((img) => {
          return new Promise((resolve) => {
            if (img.complete) {
              resolve(true);
            } else {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(true);
            }
          });
        })
      );
  
    const animate = () => {
      const ctx = gsap.context(() => {
        const blocks = gsap.utils.toArray('.projects-page > *');
  
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
      }, projectsRef);
      return ctx;
    };
  
    let ctx: gsap.Context;
    waitForImagesToLoad().then(() => {
      ctx = animate();
    });
  
    return () => {
      ctx?.revert();
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="projects-page" ref={ projectsRef }>
      <Home />
      <FutebolClube />
      <AtelierCouture />
      <DataScraper />
    </div>
  );
}