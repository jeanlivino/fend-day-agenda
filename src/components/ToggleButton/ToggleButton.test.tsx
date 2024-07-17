import { render } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

test('renders Togglebutton', () => {
  const { getByTestId } = render(<ToggleButton isSaved={true} onToggle={() => (true)} />);
  const element = getByTestId("toggleButton");
  expect(element).toBeInTheDocument();
});