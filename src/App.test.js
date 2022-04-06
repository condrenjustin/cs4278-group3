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

// make sure client landing is correctly rendered
test('renders client landing', () => {
  render(<DataDashboard />);
  expect(screen.getByText('KOACORE is a full-scale safety management firm')).toBeInTheDocument();
});

// make sure client survey is correctly rendered
test('renders client survey', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Client Survey')).toBeInTheDocument();
});

// make sure trade landing is correctly rendered
test('renders trade landing', () => {
  render(<DataDashboard />);
  expect(screen.getByText('Trade Form')).toBeInTheDocument();
});
