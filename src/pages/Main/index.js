import React from 'react';
import styled from 'styled-components';
import { LevelOne } from '~/pages/LevelOne';

const Header = styled('h1')`
  padding: 8px;
  text-align: center;
`;

const Link = styled('a')`
  text-decoration: none;
  color: #00bdd8;

  &:hover {
    color: #90eae8;
  }
`;

export function Main() {
  return (
    <>
      <Header>
        Desafios do{' '}
        <Link href="https://codar.me/input" target="_blank" rel="noreferrer">
          Curso Input | Codar.me
        </Link>
      </Header>

      <LevelOne />
    </>
  );
}
