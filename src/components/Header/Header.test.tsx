import { render } from '@testing-library/react';
import { Header } from './Header';

test('renders Header', () => {
  const { getByText } = render(<Header label='Agenda do evento' />);
  const element = getByText(/Agenda do evento/i);
  expect(element).toBeInTheDocument();
});