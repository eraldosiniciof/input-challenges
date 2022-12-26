import React from 'react';

import styled from 'styled-components';

import { Icon } from '~/components/Icon';

const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Card = styled('div')`
  background-color: #ffffff;
  border-radius: 16px;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 16px;
  padding: 0 24px;

  width: 265px;
  height: 88px;
  margin: auto;
`;

const Box = styled('div')``;

const Title = styled('div')`
  color: ${(props) => (props.color ? props.color : '')};
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled('div')`
  color: ${(props) => (props.color ? props.color : '')};
`;

export function Profile() {
  return (
    <Container>
      <Card>
        <Icon name="avatar" color="#787491" />
        <Box>
          <Title color="#18161F">Eraldo Sinicio</Title>
          <Description color="#49445F">Input: Do zero ao mercado</Description>
        </Box>
      </Card>
    </Container>
  );
}
