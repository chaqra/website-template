
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">

        {/* LEFT: Logo */}
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>
            CHAQRA.
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* RIGHT: Desktop Buttons */}
        <div className="header-actions">
          <Link to="/contact" className="header-btn">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          className={`nav-menu ${menuOpen ? "open" : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="banner">
        <div className="bannercontent">
          <div className="bannerbox">
            <p>
              Ready to take your online presence
              to the next level?
            </p>
            <Link to="/contact" className="header-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
