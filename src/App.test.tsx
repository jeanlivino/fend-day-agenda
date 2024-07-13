import App from './App';
import {render} from '@testing-library/react';

describe('App', () => {
  it('test', () => {
    const result = render(<App/>);

    const title = result.getByRole('heading')
    
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Vite + React');
  })
})