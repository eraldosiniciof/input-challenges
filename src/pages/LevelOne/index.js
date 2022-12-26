import React from 'react';
import styled from 'styled-components';
import { Option } from '~/components/Option';

const Container = styled('div')`
  padding: 20px;
`;

export const Title = styled('h2')``;

export function LevelOne() {
  return (
    <Container>
      <Title>Desafios de Nível 1</Title>
      <Option
        to="/card-pix"
        name="Cartão Pix"
        description="Card Pix centralizado (vertical
      e horizontal) com efeito hover"
      />

      <Option
        to="/profile"
        name="Perfil"
        description="Card centralizado com Avatar, Nome e Descrição"
      />
    </Container>
  );
}
