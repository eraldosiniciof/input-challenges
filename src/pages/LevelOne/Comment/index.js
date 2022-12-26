import React from 'react';

import styled from 'styled-components';
import { CommentBox } from '~/components/CommentBox';

import { Plus } from '~/components/Plus';

const mockData = [
  {
    avatar: null,
    name: 'Codar.me',
    created_at: '2022-07-24T09:57:08.375Z',
    comment: 'Quem fez o desafio, compartilha aqui!',
  },
  {
    avatar: 'avatar02',
    name: 'Eraldo Sinicio',
    created_at: '2022-12-26T10:57:08.375Z',
    comment: 'Eu fiz o desafio em 26/12 às 07:57 pt-BR 👨🏻‍💻',
  },
];

const Container = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;

  flex-direction: column;
`;

const CenterBox = styled('div')`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const plusDescription = [
  'Fiz um mockup de dados com estrutura parecidas com as que são recebidas pelo backend. Os dois comentários abaixo estão sendo renderizados por um map.',
  'O primeiro comentário tem avatar=null. Sendo assim renderiza um avatar padrão',
  'A exibição do horário do comentário é dinâmico... Então está considerando a data de criação do comentário comparado a data de hoje (o calculo está sendo realizado sem lib)',
];

export function Comment() {
  return (
    <Container>
      <Plus description={plusDescription} />
      <CenterBox>
        <CommentBox data={mockData} />
      </CenterBox>
    </Container>
  );
}
