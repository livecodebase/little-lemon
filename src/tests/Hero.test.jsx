import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../components/Hero';

/**
 * Test suite for Hero component
 * Tests rendering and accessibility
 */
describe('Hero Component', () => {
  it('renders restaurant name and location', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
  });

  it('renders restaurant description', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/family owned mediterranean restaurant/i)
    ).toBeInTheDocument();
  });

  it('renders call-to-action button', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const ctaButton = screen.getByRole('link', { name: /reserve a table/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/booking');
  });

  it('has proper heading structure for accessibility', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'hero-title');
  });
});
