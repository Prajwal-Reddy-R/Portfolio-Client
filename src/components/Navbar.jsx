import { useState } from 'react';

function Navbar({ scrolled, toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          Prajwal Reddy R
        </a>
        <button className="hamburger" onClick={handleMenuToggle}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero" className="nav-link" onClick={handleMenuToggle}>Home</a>
          <a href="#about" className="nav-link" onClick={handleMenuToggle}>About</a>
          <a href="#projects" className="nav-link" onClick={handleMenuToggle}>Projects</a>
          <a href="#contact" className="nav-link" onClick={handleMenuToggle}>Contact</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;