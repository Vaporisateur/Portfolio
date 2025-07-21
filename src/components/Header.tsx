import { useEffect, useCallback, useMemo, useRef } from 'react';

interface HeaderProps {
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}

export const Header = ({ activeSectionId, setActiveSectionId }: HeaderProps) => {
  const yOffset = -100;
  
  const recentlyClicked = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);
  
  const sectionIds = useMemo(() => ['home', 'projects', 'about', 'contact'], []);
  
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSectionId(sectionId);
        
        recentlyClicked.current = true;
        
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
        
        clickTimeoutRef.current = setTimeout(() => {
          recentlyClicked.current = false;
        }, 1000);
      }
    },
    [setActiveSectionId, yOffset]
  );

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
    
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (recentlyClicked.current) return;
      
      const scrollPosition = window.scrollY + 150;
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          
          const top = element.offsetTop;
          const height = element.offsetHeight;
          const bottom = top + height;
          
          return { id, element, top, bottom };
        })
        .filter(Boolean) as Array<{ id: string; element: HTMLElement; top: number; bottom: number }>;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        

        const isLastSection = i === sections.length - 1;
        const inSection = isLastSection
          ? scrollPosition >= section.top - 50
          : scrollPosition >= section.top && scrollPosition < section.bottom;
        
        if (inSection) {
          if (section.id !== activeSectionId) {
            setActiveSectionId(section.id);

            window.history.replaceState(null, '', `#${section.id}`);
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSectionId, sectionIds, setActiveSectionId]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href')?.substring(1);
      if (targetId) {
        scrollToSection(targetId);
        window.history.pushState(null, '', `#${targetId}`);
      }
    },
    [scrollToSection]
  );

  const labels: Record<string, string> = {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-3 p-0.5 border border-white/30 rounded-full bg-white/10 backdrop-blur">
        {sectionIds.map((sectionId) => (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            className={`nav-item ${activeSectionId === sectionId ? 'nav-highlighted' : ''}`}
            onClick={handleClick}
          >
            {labels[sectionId]}
          </a>
        ))}
      </nav>
    </div>
  );
};
