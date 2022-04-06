import { render, screen } from '@testing-library/react';
import App from './App';


// basic smoke test
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// make sure the expected thing is rendered -- change the expected value
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


