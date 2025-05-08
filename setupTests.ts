import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockIntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

beforeAll(() => {
  vi.stubGlobal('scrollTo', vi.fn());
});