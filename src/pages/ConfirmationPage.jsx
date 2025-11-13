import { useLocation, Link } from 'react-router-dom';

/**
 * ConfirmationPage component
 * Displays booking confirmation details
 */
function ConfirmationPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  // Handle case where user navigates directly to this page
  if (!booking) {
    return (
      <main className="confirmation-page">
        <div className="confirmation-container">
          <h2>No Booking Found</h2>
          <p>Please make a reservation first.</p>
          <Link to="/booking" className="btn-primary">
            Make a Reservation
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="confirmation-page">
      <div className="confirmation-container">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Your table has been reserved successfully.</p>
        
        <div className="booking-details">
          <h3>Reservation Details</h3>
          <dl>
            <dt>Date:</dt>
            <dd>{new Date(booking.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</dd>
            
            <dt>Time:</dt>
            <dd>{booking.time}</dd>
            
            <dt>Guests:</dt>
            <dd>{booking.guests} {booking.guests === 1 ? 'person' : 'people'}</dd>
            
            <dt>Occasion:</dt>
            <dd>{booking.occasion}</dd>
          </dl>
        </div>

        <p className="confirmation-note">
          A confirmation email has been sent to you. We look forward to seeing you!
        </p>

        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </main>
  );
}

export default ConfirmationPage;
