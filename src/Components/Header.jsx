import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className="header">
            <div className="header-content">
                <h2>chaqradesigns</h2>

                {/* Hamburger Icon */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >☰</button>

                {/* Mobile Menu */}
                <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
              <div className="banner">
                <div className="bannercontent">
                    <h1>chaqradesigns</h1>
                    <h2>Strategy</h2>
                    <h2>Design</h2>
                    <h2>Results</h2>

                </div>

            </div>
        </header>
    );
}

export default Header;
