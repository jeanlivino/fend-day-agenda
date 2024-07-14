import { render, screen } from '@testing-library/react';
import { ProfileCard } from './ProfileCard';

test('renders ProfileCard', () => {
  render(<ProfileCard imageFallback='A' imageUrl='' name='Avatar' role='Frontend Developer' />);
  const roleElement = screen.getByText('Frontend Developer');
  expect(roleElement).toBeInTheDocument();
});