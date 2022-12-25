import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled('div')`
  height: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled(Link)`
  color: #000;
  background-color: #00bdd8;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  text-decoration: none;

  &:hover {
    background-color: #90eae8;
  }
`;

export const Description = styled('span')`
  margin-left: 20px;
  color: #878788;
`;
