import React from 'react';
import styled from 'styled-components';
import { Option } from '~/components/Option';

const Container = styled('div')`
  padding: 20px;
`;

const Title = styled('h2')``;

export function LevelTwo() {
  return (
    <Container>
      <Title>Desafios de Nível 2 🚧</Title>

      <Option
        name="Menu"
        to="/menu"
        description="Desenvolver um Menu de um site"
      />
    </Container>
  );
}
