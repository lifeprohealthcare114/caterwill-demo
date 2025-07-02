import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'parts', label: 'Parts' },
    { id: 'specs', label: 'Specs' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/logo.png" alt="Caterwil Logo" />
          <span></span>
        </div>
        
        <nav className="nav-desktop">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <button 
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map(link => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;