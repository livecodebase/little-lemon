/**
 * About section with restaurant description
 * Provides context about Little Lemon restaurant
 */
function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-content">
        <div className="about-text">
          <h2 id="about-title">About Little Lemon</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. The restaurant 
            features a locally-sourced menu with daily specials.
          </p>
          <p>
            Our chefs bring decades of Mediterranean culinary experience, crafting 
            dishes that honor tradition while embracing contemporary tastes.
          </p>
        </div>
        <div className="about-images">
          <img 
            src="/images/chef.jpg" 
            alt="Chef preparing Mediterranean cuisine"
            className="about-img"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
