import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '~/components/Icon';
import { Plus } from '~/components/Plus';

const Container = styled('div')`
  display: flex;

  height: 100vh;
  width: 100vw;
`;

const StyledMenu = styled('div')`
  border-right: 1px solid #2d2d2d;

  width: 295px;
  height: 100vh;
`;

const BoxMenu = styled('div')`
  border-top: 1px solid #2d2d2d;
  box-sizing: border-box;
  min-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxProfile = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Title = styled('div')`
  color: ${(props) => (props.color ? props.color : '')};
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled('div')`
  color: ${(props) => (props.color ? props.color : '')};
`;

const BoxOption = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 20px;
`;

const Option = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 15px 5px;

  font-weight: 500;
  font-size: 20px;

  gap: 28px;

  cursor: pointer;

  &:hover {
    background-color: #1e1e1f;
  }
`;

const Content = styled('div')`
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export function Menu() {
  const [option, setOption] = useState('Clique em alguma opção ao lado');

  const [descriptionPlus] = useState([
    'Pequeno hover para guiar usuário para seleção no Menu',
    'useState para controlar o estado da opção escolhida no Menu',
  ]);

  return (
    <Container>
      <StyledMenu>
        <BoxMenu>
          <Icon name="logoCodarme" />
        </BoxMenu>

        <BoxMenu>
          <Icon name="avatar" color="#787491" />
          <BoxProfile>
            <Title>Eraldo Sinicio</Title>
            <Description color="#49445F">Input: Do zero ao mercado</Description>
          </BoxProfile>
        </BoxMenu>

        <BoxMenu>
          <BoxOption>
            <Option onClick={() => setOption('Clicou em Início')}>
              <Icon name="start" />
              Início
            </Option>

            <Option onClick={() => setOption('Clicou em Aulas')}>
              <Icon name="classes" />
              Aulas
            </Option>

            <Option onClick={() => setOption('Clicou em Comunidade')}>
              <Icon name="community" />
              Comunidade
            </Option>

            <Option onClick={() => setOption('Clicou em Suporte')}>
              <Icon name="support" />
              Suporte
            </Option>
          </BoxOption>
        </BoxMenu>
      </StyledMenu>

      <div style={{ flex: 1 }}>
        <Plus description={descriptionPlus} />
        <Content>{option}</Content>
      </div>
    </Container>
  );
}
