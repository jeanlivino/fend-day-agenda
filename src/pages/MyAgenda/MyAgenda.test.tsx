import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { MyAgenda } from './MyAgenda';

test('renders LivePage', () => {
  const queryClient = new QueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MyAgenda />
      </BrowserRouter>
    </QueryClientProvider>
  );
  const element = getByText(/Nenhuma palestra salva para exibir./i);
  expect(element).toBeInTheDocument();
});