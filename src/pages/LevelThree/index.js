import React from 'react';
import styled from 'styled-components';

import { Option } from '~/components/Option';

const Container = styled('div')`
  padding: 20px;
`;

const Title = styled('h2')``;

export function LevelThree() {
  return (
    <Container>
      <Title>Desafios de Nível 3 🚧</Title>

      <Option
        name="To-Do List"
        to="/to-do-list"
        description="Gestão de Tarefas do dia a dia"
      />
    </Container>
  );
}
