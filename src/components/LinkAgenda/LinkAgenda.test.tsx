import { render } from '@testing-library/react';
import { LinkAgenda } from './LinkAgenda';

test('renders LinkAgenda', () => {
  const { getByText } = render(<LinkAgenda />);
  const element = getByText(/Acontecendo agora/i);
  expect(element).toBeInTheDocument();
});