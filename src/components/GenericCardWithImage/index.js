import React from 'react';
import t from 'prop-types';

import styled from 'styled-components';
import { Icon } from '~/components/Icon';

const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const BoxCard = styled('div')`
  background-color: #fff;

  width: 320px;
  height: 432px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 32px;

  border: 2px solid #d6d4e2;

  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 5px white;
  }
`;

const BoxImg = styled('img')``;

const BoxText = styled('div')`
  flex: 1;
`;

const Title = styled('div')`
  display: flex;
  text-align: start;
  margin: 24px;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #18161f;
`;

const BoxProfile = styled('div')`
  display: flex;
  align-items: center;

  padding: 5px 24px;
`;

const BoxFooter = styled('div')`
  display: flex;
  justify-content: space-between;

  margin: 28px;
  padding: 0 25px;

  width: 80%;
`;

const BoxItemFooter = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
  color: #787490;
`;

export function GenericCardWithImage({ data }) {
  return (
    <Container>
      {data.length && (
        <>
          {data.map((item, index) => (
            <BoxCard key={`key-${index}`}>
              <BoxImg src={item.cover}></BoxImg>
              <BoxText>
                <Title>{item.title}</Title>
                <BoxProfile>
                  <img src={item.profile} />
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: '#18161F',
                      marginLeft: 16,
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={{ marginLeft: 5, color: '#787490' }}>
                    • {item.day} {item.day > 1 ? 'dias' : 'dia'} atrás
                  </span>
                </BoxProfile>
              </BoxText>
              <BoxFooter>
                <BoxItemFooter>
                  <Icon name="comment" />
                  {`${item.nComment}`}
                </BoxItemFooter>
                <BoxItemFooter>
                  <Icon name="view" />
                  {`${item.nView}`}
                </BoxItemFooter>
              </BoxFooter>
            </BoxCard>
          ))}
        </>
      )}
    </Container>
  );
}

GenericCardWithImage.propTypes = {
  data: t.arrayOf(t.objectOf(t.any)),
};
