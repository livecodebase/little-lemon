import { Link } from 'react-router-dom';

/**
 * Header component with navigation menu
 * Includes semantic HTML and ARIA labels for accessibility
 */
function Header() {
  return (
    <header className="header">
      <nav className="nav-container" aria-label="Main navigation">
        <div className="logo">
          <Link to="/" aria-label="Little Lemon Home">
            <h1>🍋 Little Lemon</h1>
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
