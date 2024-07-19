import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReturnButton from './ReturnButton';

test('renders ReturnButton', () => {
  const { getByRole } = render(
    <BrowserRouter>
      <ReturnButton />
    </BrowserRouter>
  );
  const linkElement = getByRole('link');
  expect(linkElement).toBeInTheDocument();
});
