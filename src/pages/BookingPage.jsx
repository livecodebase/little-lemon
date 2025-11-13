import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

/**
 * Reducer function to manage available booking times
 * Simulates API call to get available times for selected date
 */
function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // In a real app, this would fetch from an API
      // For now, return different times based on date
      return generateAvailableTimes(action.date);
    default:
      return state;
  }
}

/**
 * Generates available time slots
 * This simulates what would come from a backend API
 */
function generateAvailableTimes(date) {
  // Simple time generation - in real app, this would check database
  const times = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  
  return times;
}

/**
 * Initialize available times with default slots
 */
function initializeTimes() {
  return generateAvailableTimes(new Date().toISOString().split('T')[0]);
}

/**
 * BookingPage component
 * Manages booking form state and submission
 */
function BookingPage() {
  const navigate = useNavigate();
  
  // Use reducer to manage available times
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  /**
   * Updates available times when date changes
   */
  function handleDateChange(selectedDate) {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  /**
   * Handles form submission
   * In a real app, this would send data to backend API
   */
  function submitForm(formData) {
    // Simulate API submission
    console.log('Booking submitted:', formData);
    
    // In real app, you would:
    // 1. Send POST request to API
    // 2. Handle success/error responses
    // 3. Show loading state
    
    // For now, simulate successful submission
    const success = submitAPI(formData);
    
    if (success) {
      // Navigate to confirmation page
      navigate('/confirmation', { 
        state: { booking: formData } 
      });
    } else {
      alert('Booking failed. Please try again.');
    }
  }

  return (
    <main className="booking-page">
      <div className="booking-container">
        <BookingForm
          availableTimes={availableTimes}
          onSubmit={submitForm}
          onDateChange={handleDateChange}
        />
      </div>
    </main>
  );
}

/**
 * Simulates API call to submit booking
 * Returns true if successful
 */
function submitAPI(formData) {
  // Simulate API call
  // In real app, this would be: fetch('/api/bookings', { method: 'POST', ... })
  return true;
}

export default BookingPage;
