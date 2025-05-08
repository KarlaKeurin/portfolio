// src/tests/utils/renderWithRouter.tsx
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

export function renderWithRouter(ui: React.ReactNode, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return render(<Router>{ui}</Router>);
}
