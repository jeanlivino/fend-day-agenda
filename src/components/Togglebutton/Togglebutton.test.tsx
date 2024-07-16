import { render } from '@testing-library/react';
import { Togglebutton } from './Togglebutton';

test('renders Togglebutton', () => {
  const { getByTestId } = render(<Togglebutton initialMode={false} />);
  const element = getByTestId("false");
  expect(element).toBeInTheDocument();
});