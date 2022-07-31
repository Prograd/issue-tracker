import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DefaultStyles } from './DefaultStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <DefaultStyles />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
