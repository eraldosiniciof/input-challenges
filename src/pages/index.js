import React from 'react';
import { Main } from '~/pages/Main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPix } from './LevelOne/CardPix';
import { Profile } from './LevelOne/Profile';
import { Comment } from './LevelOne/Comment';

const AllRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="/card-pix" element={<CardPix />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/comment" element={<Comment />} />
  </Routes>
);

export function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
