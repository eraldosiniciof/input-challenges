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
  border-radius: ${(props) => (props.like ? '32px 32px 0 0' : '32px')};

  margin-top: 28px;

  background-color: #ffffff;

  @media screen and (max-width: 400px) {
    padding: 10px 20px;
    width: 330px;
    height: 10vh;
  }
`;

const BoxLike = styled('div')`
  color: black;
  background-color: #f5f4f6;
  width: 720px;
  padding: 20px 56px;
  text-align: center;
  border-radius: 0 0 32px 32px;

  @media screen and (max-width: 400px) {
    padding: 10px 20px;
    width: 330px;
  }
`;

const ItemLike = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
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

function LikeComponent({ bg, right, top }) {
  return (
    <div
      style={{
        backgroundColor: bg,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        border: '4px solid white',
        position: 'relative',
        top: top,
        right: right,
      }}
    >
      <Icon name="like" color="white" />
    </div>
  );
}

export function CommentBox({ data, setState }) {
  return (
    <>
      {data?.length &&
        data.map((dataComment, index) => (
          <div key={`Key-${index}`}>
            <Card key={dataComment.name} like={dataComment.do_you_like}>
              <BoxAvatar onClick={setState && (() => setState(dataComment))}>
                <Icon name={dataComment.avatar || 'avatar'} />
              </BoxAvatar>
              {dataComment.do_you_like ? (
                <LikeComponent bg="red" right={25} top={30} />
              ) : (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 50,
                    border: '4px solid transparent',
                    position: 'relative',
                    top: 30,
                    right: 25,
                  }}
                ></div>
              )}

              <Box>
                <BoxHeader>
                  <Title>{dataComment.name}</Title>
                  <Hours>{getDiffHours(dataComment.created_at)} atrás</Hours>
                </BoxHeader>
                <BoxComment>{dataComment.comment}</BoxComment>
              </Box>
            </Card>

            {dataComment.do_you_like && (
              <BoxLike>
                <ItemLike>
                  <LikeComponent bg="red" right={2} />
                  <LikeComponent bg="purple" right={12} />
                  <LikeComponent bg="blue" right={22} />
                  <LikeComponent bg="orange" right={32} />
                  Você e outras {dataComment.total_like} pessoas curtiram esse
                  comentário
                </ItemLike>
              </BoxLike>
            )}
          </div>
        ))}
    </>
  );
}

LikeComponent.propTypes = {
  bg: t.string,
  right: t.number,
  top: t.number,
};

CommentBox.propTypes = {
  data: t.arrayOf(t.any),
  icon: t.func,
  setState: t.func,
};
