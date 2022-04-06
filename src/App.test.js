import { render, screen } from '@testing-library/react';
import App from './App';
import DataDashboard from './pages/DataDashboard';


// basic smoke test
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// make sure data dashboard is correctly rendered
test('renders data dashboard', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});


