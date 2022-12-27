import React from 'react';
import styled from 'styled-components';
import sea from '~/assets/img/sea.png';
import { Icon } from '~/components/Icon';
import imgBruno from '~/assets/img/imgBruno.png';

const Container = styled('div')`
  background-image: url(${sea});
  background-size: cover;
  color: #ffffff;

  display: block;

  height: 100vh;
  width: 100vw;

  overflow: hidden;

  @media screen and (max-width: 400px) {
    overflow: auto;
  }
`;

const Header = styled('header')`
  padding: 20px 84px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    padding: 15px 10px;
  }
`;

const MainBox = styled('div')`
  flex-direction: 'column';
  padding: 0 10vw;

  @media screen and (max-width: 400px) {
    padding: 1px;
    img {
      display: none;
    }
  }
`;

const Box = styled('div')`
  display: flex;
`;

const Link = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-decoration: none;
  padding: 16px 32px;

  color: #fff;

  &:hover {
    color: #00d9c0;
  }
`;

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${(props) => (props.bg ? props.bg : '')};
  color: ${(props) => (props.color ? props.color : '')};

  padding: 16px 32px;
  border-radius: 40px;
  border: 1px solid #49445f;

  cursor: pointer;

  &:hover {
    border: 1px solid #00d9c0;
    color: ${(props) => (props.colorHover ? props.colorHover : '#00d9c0')};
  }

  @media screen and (max-width: 400px) {
    margin: auto;
  }
`;

const BoxTitle = styled('div')`
  font-size: 52px;
  font-weight: 700;

  padding: 50px 0;

  @media screen and (max-width: 400px) {
    padding: 30px 0;
    width: 100vw;
  }
`;

const Content = styled('main')`
  display: flex;
  justify-content: space-between;
  flex: 1;

  padding: 20px 100px;

  @media screen and (max-width: 400px) {
    padding: 4px;
    width: 100vw;
  }
`;

const BoxContent = styled('div')`
  gap: 64px;
  font-size: 14px;
  flex-direction: 'column';
  width: 35vw;
  padding: 32px;

  @media screen and (max-width: 400px) {
    padding: 0;
    width: 100vw;
  }
`;

export function HeroInput() {
  return (
    <Container>
      <MainBox>
        <Header>
          <Icon name="logo" />
          <Box>
            <Link href="#">
              <Icon name="user" />
              Já sou aluno
            </Link>
            <Button bg="transparent" color="#fff">
              Faça sua inscrição
            </Button>
          </Box>
        </Header>

        <Content>
          <BoxContent>
            <Box style={{ gap: 16 }}>
              <Icon name="lightning" />
              FAÇA PARTE DA TUMA 1
            </Box>
            <BoxTitle>
              Saia do zero e comece sua carreira como dev Full Stack
            </BoxTitle>
            <Box style={{ fontSize: 20, lineHeight: 2, padding: '30px 0' }}>
              Aprenda as habilidades necessárias para sair do completo zero e
              conquistar sua primeira vaga no mercado da programação já nos
              próximos meses.
            </Box>
            <Button
              bg="#00d9c0"
              color="#000"
              colorHover="#fff"
              style={{
                width: 290,
                height: 74,
                fontSize: 20,
                fontWeight: 700,
                marginTop: 40,
              }}
            >
              Garantir minha vaga
            </Button>
          </BoxContent>

          <Box style={{ padding: '64px 0' }}>
            <img width={420} height={460} src={imgBruno} />
          </Box>
        </Content>
      </MainBox>
    </Container>
  );
}
