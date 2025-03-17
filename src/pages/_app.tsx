import type {AppProps} from 'next/app';
import '@/styles/reset.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastContainer} from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({Component, pageProps}: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Component {...pageProps} />
      <ToastContainer />
    </QueryClientProvider>
  );
}
