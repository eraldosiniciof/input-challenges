import styled from 'styled-components';

export const Container = styled('div')`
  height: 100vh;
  display: flex;
`;

export const StyledCard = styled('div')`
  margin: auto;
  background-color: #e6e6e9;
  color: #0f0f10;
  width: 208px;
  height: 244px;
  border-radius: 32px;
  padding: 32px 24px;
  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:hover {
    background-color: #171718;
    color: #e6e6e9;
    cursor: pointer;
    box-shadow: 0px 0px 20px white;
  }
`;

export const Title = styled('div')`
  width: 160px;
  height: 56px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #787491;
`;

export const Currency = styled('div')`
  width: 100%;
  height: 48px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
`;
