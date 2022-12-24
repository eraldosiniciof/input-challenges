import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled(Link)`
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
  font-size: 0.9rem;
  color: #878788;
`;
