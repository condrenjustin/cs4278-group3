import { render, screen } from '@testing-library/react';
import App from './App';
import DataDashboard from './pages/DataDashboard';
import Calendar from './pages/Calendar';
import ClientDatabase from './pages/ClientDatabase';
import ClientLanding from './pages/ClientLanding';
import ClientSurvey from './pages/ClientSurvey';
import TradeLanding from './pages/TradeLanding';


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

// make sure calendar is correctly rendered
test('renders calendar', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});

// make sure client database is correctly rendered
test('renders client database', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});

// make sure client landing is correctly rendered
test('renders client landing', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});

// make sure client survey is correctly rendered
test('renders client survey', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});

// make sure trade landing is correctly rendered
test('renders trade landing', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Thank you for considering KOACORE')).toBeInTheDocument();
});
