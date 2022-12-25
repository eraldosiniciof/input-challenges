import React from 'react';
import styled from 'styled-components';
import { LevelOne } from '~/pages/LevelOne';

const Container = styled('div')`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Box = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  border-bottom: 1px solid #222222;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Header = styled('h1')`
  text-align: center;
`;

const Link = styled('a')`
  margin-left: 8px;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: #00bdd8;

  &:hover {
    color: #90eae8;
  }
`;

export function Main() {
  return (
    <Container>
      <Box>
        <Header>Desafios do</Header>
        <Link href="https://codar.me/input" target="_blank" rel="noreferrer">
          Curso Input | Codar.me
        </Link>
      </Box>

      <LevelOne />
    </Container>
  );
}
