import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Test setup file
 * Configures testing environment and cleanup
 */

// Cleanup after each test
afterEach(() => {
  cleanup();
});
