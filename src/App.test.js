import { render, screen } from '@testing-library/react';
import App from './App';
import DataDashboard from './pages/DataDashboard';
import Calendar from './pages/Calendar';
import ClientDatabase from './pages/ClientDatabase';
import ClientLanding from './pages/ClientLanding';
import ClientSurvey from './pages/ClientSurvey';
import TradeLanding from './pages/TradeLanding';


// make sure data dashboard is correctly rendered
test('renders data dashboard', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
});

// make sure client landing is correctly rendered
test('renders client landing', () => {
  render(<ClientLanding />);
  expect(screen.getByText('Welcome to KOACORE')).toBeInTheDocument();
});

// make sure client survey is correctly rendered
test('renders client survey', () => {
  render(<ClientSurvey />);
  expect(screen.getByText('Client Survey')).toBeInTheDocument();
});

// make sure trade landing is correctly rendered
test('renders trade landing', () => {
  render(<TradeLanding />);
  expect(screen.getByText('Trade Form')).toBeInTheDocument();
});
