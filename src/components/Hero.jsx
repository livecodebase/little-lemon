import { Link } from 'react-router-dom';

/**
 * Hero section for the homepage
 * Features call-to-action button for reservations
 */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-text">
          <h2 id="hero-title">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn-primary" aria-label="Reserve a table">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="/images/restaurant.jpg" 
            alt="Little Lemon restaurant interior with cozy ambiance"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
