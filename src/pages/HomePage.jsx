import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

/**
 * Home page component
 * Displays hero section with call-to-action, specials, and testimonials
 */
function HomePage() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  );
}

export default HomePage;
