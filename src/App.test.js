// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerNexus/i);
    expect(titleElement).toBeInTheDocument();
});
