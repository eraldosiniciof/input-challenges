import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from '~/pages/Main';

import { CardPix } from './LevelOne/CardPix';
import { Profile } from './LevelOne/Profile';
import { Comment } from './LevelOne/Comment';
import { CardWithImage } from './LevelOne/CardWithImage';
import { Menu } from './LevelTwo/Menu';
import { CommentsWithLike } from './LevelTwo/CommentsWithLike';
import { BestPicture } from './LevelTwo/BestPictures';
import { HeroInput } from './LevelTwo/HeroInput';
import { ToDoList } from './LevelThree/ToDoList';

const AllRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="/card-pix" element={<CardPix />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/comment" element={<Comment />} />
    <Route path="/card-with-image" element={<CardWithImage />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/comments-like" element={<CommentsWithLike />} />
    <Route path="/best-pictures" element={<BestPicture />} />
    <Route path="/hero-input" element={<HeroInput />} />
    <Route path="/to-do-list" element={<ToDoList />} />
  </Routes>
);

export function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
