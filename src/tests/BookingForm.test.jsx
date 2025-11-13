import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

/**
 * Test suite for BookingForm component
 * Tests form rendering, validation, and submission
 */
describe('BookingForm Component', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const mockOnSubmit = vi.fn();
  const mockOnDateChange = vi.fn();

  it('renders all form fields', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  it('displays available time options', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    
    // Check that all times are available as options
    mockAvailableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  it('shows validation error when date is not selected', async () => {
    const user = userEvent.setup();
    
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    await user.click(submitButton);

    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
  });

  it('shows validation error when time is not selected', async () => {
    const user = userEvent.setup();
    
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    // Fill date but not time
    const dateInput = screen.getByLabelText(/choose date/i);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    
    await user.type(dateInput, dateString);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    await user.click(submitButton);

    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  it('validates number of guests range', async () => {
    const user = userEvent.setup();
    
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Test minimum validation
    await user.clear(guestsInput);
    await user.type(guestsInput, '0');
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    await user.click(submitButton);

    expect(screen.getByText(/at least 1 guest is required/i)).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    // Fill all required fields
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    
    const dateInput = screen.getByLabelText(/choose date/i);
    await user.type(dateInput, dateString);

    const timeSelect = screen.getByLabelText(/choose time/i);
    await user.selectOptions(timeSelect, '18:00');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await user.clear(guestsInput);
    await user.type(guestsInput, '4');

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: dateString,
      time: '18:00',
      guests: 4,
      occasion: 'Birthday'
    });
  });

  it('has proper accessibility attributes', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('aria-required', 'true');

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('aria-required', 'true');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('aria-required', 'true');
  });

  it('calls onDateChange when date is changed', async () => {
    const user = userEvent.setup();
    
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onSubmit={mockOnSubmit}
        onDateChange={mockOnDateChange}
      />
    );

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    
    const dateInput = screen.getByLabelText(/choose date/i);
    await user.type(dateInput, dateString);

    expect(mockOnDateChange).toHaveBeenCalledWith(dateString);
  });
});
