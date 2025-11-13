/**
 * Specials component
 * Displays weekly special menu items
 */
function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      emoji: '🥗',
      emojiLabel: 'Greek Salad'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Perfect starter!',
      emoji: '🍞',
      emojiLabel: 'Bruschetta'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$7.99',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      emoji: '🍋',
      emojiLabel: 'Lemon Dessert'
    }
  ];

  return (
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="specials-container">
        <div className="specials-header">
          <h2 id="specials-title">This Week's Specials</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        
        <div className="specials-grid">
          {specials.map(special => (
            <article key={special.id} className="special-card">
              <div className="special-image-placeholder">
                <span role="img" aria-label={special.emojiLabel}>
                  {special.emoji}
                </span>
              </div>
              <div className="special-content">
                <div className="special-title">
                  <h3>{special.name}</h3>
                  <span className="price">{special.price}</span>
                </div>
                <p>{special.description}</p>
                <a href="#" className="order-link">Order a delivery →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
