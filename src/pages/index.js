import React from 'react';
import { Main } from '~/pages/Main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPix } from './LevelOne/CardPix';

const AllRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="/card-pix" element={<CardPix />} />
  </Routes>
);

export function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
