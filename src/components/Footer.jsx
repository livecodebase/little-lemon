/**
 * Footer component with contact information
 * Uses semantic HTML for better accessibility
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <address>
            <p>123 Lemon Street</p>
            <p>Chicago, IL 60601</p>
            <p>Phone: <a href="tel:+13125551234">(312) 555-1234</a></p>
            <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
