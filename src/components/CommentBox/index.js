import React from 'react';

import t from 'prop-types';
import styled from 'styled-components';

import { Icon } from '~/components/Icon';

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

export function CommentBox({ data }) {
  return (
    <>
      {data?.length &&
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

CommentBox.propTypes = {
  data: t.arrayOf(t.any),
};
