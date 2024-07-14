import { render } from '@testing-library/react';
import { Togglebutton } from './Togglebutton';

test('renders Togglebutton', () => {
  const { getByTestId } = render(<Togglebutton mode={false} />);
  const element = getByTestId("false");
  expect(element).toBeInTheDocument();
});