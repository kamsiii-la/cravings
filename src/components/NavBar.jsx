
import {Link} from "react-router-dom"
import { useState } from "react"
import '../CSS/NavBar.css'

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="navbar">
            <div className="foods-logo">
                <h3>AddYourCravings</h3>
            </div>

            <button
                className="hamburger-menu"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/favorites" className="nav-link" onClick={() => setIsMenuOpen(false)}>Cravings</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacts</Link>
            </div>
        </nav>
    );
}

export default NavBar;