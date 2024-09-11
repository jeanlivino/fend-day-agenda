import { render } from '@testing-library/react';
import { SpeakerSection } from './SpeakerSection';

test('renders SpeakerComponent', () => {
  const liveTalk = {
    id: 1,
    hour: '10:00',
    title: 'Test Talk',
    tags: ['tag1', 'tag2'],
    room: 'Test Room',
    speaker: {
      image: 'test.jpg',
      title: 'Test Speaker',
      role: 'Test Role',
      company: 'Test Company',
      bio: 'Test Bio',
      social_link: 'https://test.com',
      id: 1,
    },
  };
  const { getByText } = render(<SpeakerSection handleCardModeChange={() => { }} liveTalk={liveTalk} savedCardIds={[]} />);
  const element = getByText(/Test Talk/i);
  expect(element).toBeInTheDocument();
});