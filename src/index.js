import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from '~/components/Theme/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CardPix } from './pages/LevelOne/CardPix';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/card-pix',
    element: <CardPix />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
