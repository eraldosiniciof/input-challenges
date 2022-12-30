import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 98vw;
  margin: auto;
`;

export const MainBox = styled('div')`
  margin: 2rem auto;
`;

export const HeaderBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 640px;
  height: 120px;

  overflow: hidden;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 20%;
  }
`;

export const TitleHeaderBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 292px;
  height: 32px;
`;

export const TitleHeader = styled('div')`
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const InputBox = styled('div')`
  width: 640px;
  height: 56px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const InputText = styled('input')`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 472px;
  height: 56px;

  padding: 0 16px;

  border: 1px solid #d6d4e2;
  border-radius: 16px;
  font-size: 16px;

  outline: 0;
`;

export const InputButton = styled('button')`
  border: none;
  border-radius: 16px;
  background-color: #02b553;

  font-size: 16px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 152px;
  height: 56px;

  &:hover {
    cursor: pointer;
    background-color: #12ba5e;
  }
`;
