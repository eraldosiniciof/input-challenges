import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentBox } from '~/components/CommentBox';
import { Plus } from '~/components/Plus';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const CommentsBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
`;

export function CommentsWithLike() {
  const [mockData, setMockData] = useState([
    {
      id: 1,
      avatar: null,
      name: 'Codar.me',
      created_at: '2022-07-24T09:57:08.375Z',
      comment: 'Quem fez o desafio, compartilha aqui!',
      do_you_like: true,
      total_like: 32165,
    },
    {
      id: 2,
      avatar: 'avatar02',
      name: 'Eraldo Sinicio',
      created_at: '2022-12-26T10:57:08.375Z',
      comment: 'Eu fiz o desafio em 26/12 às 07:57 pt-BR 👨🏻‍💻',
      do_you_like: false,
      total_like: 1020,
    },
  ]);

  function handleClickAvatar(item) {
    const itemIndex = mockData.findIndex((md) => md.id === item.id);
    const tempItems = [...mockData];

    tempItems[itemIndex].do_you_like = !tempItems[itemIndex].do_you_like;

    setMockData(tempItems);
  }

  const [plus] = useState([
    'Ao clicar no avatar irá realizar o "like" e mostrará que você curtiu e a quantidade de likes que o post obteve. Esses dados estão mocados simulando estrutura de recebimento via requisição http',
    'O estado está sendo controlado por useState no próprio componente. Por isso, caso atualize a página, o estado será resetado para o inicial',
  ]);

  return (
    <Container>
      <Plus description={plus} />
      <CommentsBox>
        <CommentBox
          data={mockData}
          setState={(item) => handleClickAvatar(item)}
        />
      </CommentsBox>
    </Container>
  );
}
