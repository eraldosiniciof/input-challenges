import React from 'react';

import img from '~/assets/img/img.png';
import profile from '~/assets/img/profile.png';

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

  &:hover {
    box-shadow: 0px 0px 50px white;
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

export function CardWithImage() {
  return (
    <Container>
      <BoxCard>
        <BoxImg src={img}></BoxImg>
        <BoxText>
          <Title>Escolha do dia - Natureza</Title>
          <BoxProfile>
            <img src={profile} />
            <span
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#18161F',
                marginLeft: 16,
              }}
            >
              Lynsey Searle
            </span>
            <span style={{ marginLeft: 5, color: '#787490' }}>
              • 1 dia atrás
            </span>
          </BoxProfile>
        </BoxText>
        <BoxFooter>
          <BoxItemFooter>
            <Icon name="comment" />
            72
          </BoxItemFooter>
          <BoxItemFooter>
            <Icon name="view" />
            24
          </BoxItemFooter>
        </BoxFooter>
      </BoxCard>
    </Container>
  );
}
