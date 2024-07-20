import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { LivePage } from './LivePage';

test('renders LivePage', () => {
  const queryClient = new QueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LivePage />
      </BrowserRouter>
    </QueryClientProvider>
  );
  const element = getByText(/Acontecendo agora:/i);
  expect(element).toBeInTheDocument();
});