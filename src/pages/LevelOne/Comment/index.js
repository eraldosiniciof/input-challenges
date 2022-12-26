import React from 'react';

import t from 'prop-types';
import styled from 'styled-components';

import { Icon } from '~/components/Icon';
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

const Card = styled('div')`
  display: flex;
  align-items: center;

  justify-content: flex-start;

  padding: 12px 56px;

  width: 720px;
  height: 128px;
  border-radius: 32px;

  background-color: #ffffff;

  @media screen and (max-width: 400px) {
    padding: 10px 20px;
    width: 330px;
    height: 10vh;
  }
`;

const BoxAvatar = styled('div')`
  background-color: #f5cb5c;
  border-radius: 42px;
  width: 85px;
  height: 85px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    border-radius: 30px;
    width: 70px;
    height: 70px;
  }
`;

const Box = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  margin-left: 40px;

  @media screen and (max-width: 400px) {
    margin-left: 8px;
  }
`;

const Title = styled('div')`
  font-size: 24px;
  font-weight: bold;
  color: #18161f;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const Hours = styled('div')`
  color: rgba(24, 22, 31, 0.6);
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const BoxHeader = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 400px) {
    gap: 4px;
  }
`;

const BoxComment = styled('div')`
  color: #18161f;
  font-size: 24px;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

function getDiffHours(initialDate) {
  const created = new Date(initialDate).getTime();
  const now = new Date().getTime();

  const diff = new Date(now - created);
  const diffHours = Math.round(diff.getTime() / 3600000).toString();

  const totalDays = (diffHours / 24).toFixed(0);

  const result =
    diffHours > 24
      ? `${totalDays} ${totalDays > 1 ? 'dias' : 'dia'}`
      : `${diffHours} ${diffHours > 1 ? 'horas' : 'hora'}`;

  return `● ${result}`;
}

function Item({ data }) {
  return (
    <>
      {data.length &&
        data.map((dataComment) => (
          <Card key={dataComment.name}>
            <BoxAvatar>
              <Icon name={dataComment.avatar || 'avatar'} />
            </BoxAvatar>
            <Box>
              <BoxHeader>
                <Title>{dataComment.name}</Title>
                <Hours>{getDiffHours(dataComment.created_at)} atrás</Hours>
              </BoxHeader>
              <BoxComment>{dataComment.comment}</BoxComment>
            </Box>
          </Card>
        ))}
    </>
  );
}

Item.propTypes = {
  data: t.arrayOf(t.any),
};

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
        <Item data={mockData} />
      </CenterBox>
    </Container>
  );
}
