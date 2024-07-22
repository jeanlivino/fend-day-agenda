import { render } from '@testing-library/react';
import { LinkAgenda } from './LinkAgenda';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders LinkAgenda', () => {
  const { getByText } = render(
    <Router>
      <LinkAgenda />
    </Router>
  );
  const element = getByText(/Acontecendo agora/i);
  expect(element).toBeInTheDocument();
});