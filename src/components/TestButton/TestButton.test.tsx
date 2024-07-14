import { render } from '@testing-library/react';
import { TestButton } from './TestButton';

test('renders TestButton', () => {
  const { getByText } = render(<TestButton />);
  const element = getByText(/Test Button/i);
  expect(element).toBeInTheDocument();
});