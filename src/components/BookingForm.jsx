import { useState } from 'react';

/**
 * BookingForm component with validation
 * Handles table reservation with date, time, guests, and occasion
 * Includes comprehensive form validation and error handling
 */
function BookingForm({ availableTimes, onSubmit, onDateChange }) {
  // Form state management
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  // Error state for validation
  const [errors, setErrors] = useState({});

  /**
   * Validates form data before submission
   * Returns object with error messages if validation fails
   */
  function validateForm(data) {
    const newErrors = {};
    
    // Validate date - must be today or future date
    if (!data.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(data.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Date must be today or in the future';
      }
    }

    // Validate time selection
    if (!data.time) {
      newErrors.time = 'Please select a time';
    }

    // Validate number of guests (1-10)
    if (data.guests < 1) {
      newErrors.guests = 'At least 1 guest is required';
    } else if (data.guests > 10) {
      newErrors.guests = 'Maximum 10 guests allowed';
    }

    return newErrors;
  }

  /**
   * Handles input changes and updates form state
   */
  function handleChange(event) {
    const { name, value } = event.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }

    // Update available times when date changes
    if (name === 'date') {
      onDateChange(value);
    }
  }

  /**
   * Handles form submission with validation
   */
  function handleSubmit(event) {
    event.preventDefault();
    
    // Validate form
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit if validation passes
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form" aria-label="Table reservation form">
      <h2>Reserve a Table</h2>
      
      {/* Date selection */}
      <div className="form-group">
        <label htmlFor="res-date">Choose date *</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.date ? 'true' : 'false'}
          aria-describedby={errors.date ? 'date-error' : undefined}
        />
        {errors.date && (
          <span id="date-error" className="error-message" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      {/* Time selection */}
      <div className="form-group">
        <label htmlFor="res-time">Choose time *</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.time ? 'true' : 'false'}
          aria-describedby={errors.time ? 'time-error' : undefined}
        >
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && (
          <span id="time-error" className="error-message" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      {/* Number of guests */}
      <div className="form-group">
        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
          aria-required="true"
          aria-invalid={errors.guests ? 'true' : 'false'}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
        />
        {errors.guests && (
          <span id="guests-error" className="error-message" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      {/* Occasion selection */}
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit button */}
      <button 
        type="submit" 
        className="btn-primary"
        aria-label="Submit reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
