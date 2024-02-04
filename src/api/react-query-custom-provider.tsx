'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const client = new QueryClient();

const ReactQueryCustomProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};
export default ReactQueryCustomProvider;
