import { render } from '@testing-library/react';
import { DeadComponent } from './DeadComponent';

test('renders DeadComponent', () => {
  const { getByText } = render(<DeadComponent title={'Abertura'} hours={'8:00y'} />);
  const element = getByText(/Abertura/i);
  expect(element).toBeInTheDocument();
});