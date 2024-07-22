import { render } from '@testing-library/react';
import { ButtonTalk } from './ButtonTalk';

test('renders ButtonTalk', () => {
  const { getByText } = render(<ButtonTalk children="Test" active={true} mode={'Frontend'} />);
  const element = getByText(/Test/i);
  expect(element).toBeInTheDocument();
});