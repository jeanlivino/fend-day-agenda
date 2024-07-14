import React from "react";
import {renderHook, waitFor} from '@testing-library/react';
import {QueryClientProvider, QueryClient} from 'react-query'
import { useAgenda } from "./useAgenda";

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  }
})
const wrapper = ({ children }: {children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

test.skip('check data loading', async () => {
  const {result} = renderHook(() => useAgenda(), {wrapper});

  await waitFor(() => result.current.isSuccess);

  expect(result.current.isSuccess).toBeTruthy();
})