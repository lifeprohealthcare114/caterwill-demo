import { useEffect, useState } from 'react';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'gallery', 'parts', 'specs', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="side-nav">
      {['home', 'features', 'gallery', 'parts', 'specs', 'testimonials'].map((section) => (
        <button
          key={section}
          className={`side-nav-link ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          data-tooltip={section.charAt(0).toUpperCase() + section.slice(1)}
          aria-label={`Go to ${section} section`}
        />
      ))}
    </div>
  );
};

export default SideNavigation;