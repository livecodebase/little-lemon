/**
 * Testimonials component
 * Displays customer reviews and ratings
 */
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Food Critic',
      rating: 5,
      review: 'Best Mediterranean food in Chicago! The atmosphere is cozy and the staff is incredibly friendly. Highly recommend the Greek salad!'
    },
    {
      id: 2,
      name: 'John D.',
      role: 'Regular Customer',
      rating: 5,
      review: 'I\'ve been coming here for years. The quality never disappoints. Their lemon dessert is to die for!'
    },
    {
      id: 3,
      name: 'Maria K.',
      role: 'Chef',
      rating: 5,
      review: 'As a chef myself, I can truly appreciate the authentic flavors and attention to detail. Little Lemon is a gem!'
    },
    {
      id: 4,
      name: 'Tom R.',
      role: 'Local Resident',
      rating: 5,
      review: 'Perfect spot for date night or family dinner. The ambiance is wonderful and the food is exceptional!'
    }
  ];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <h2 id="testimonials-title">What Our Customers Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <span className="avatar">👤</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="subtitle">{testimonial.role}</p>
                </div>
              </div>
              <p>"{testimonial.review}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
