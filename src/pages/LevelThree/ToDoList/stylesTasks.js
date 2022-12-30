import styled from 'styled-components';

export const TaskBox = styled('div')`
  width: 640px;

  margin-top: 72px;
`;

export const TaskHeaderBox = styled('div')`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const TaskHeaderText = styled('div')`
  font-size: 24px;
  font-weight: 700;
`;

export const ListTaskBox = styled('div')`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TaskItem = styled('div')`
  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  height: 72px;

  border: ${(props) => (props.resolved ? '2px solid #02b553' : '0')};
  border-radius: 24px;
  padding: 0 24px;
`;

export const CheckAndTask = styled('div')`
  display: flex;
  flex: 1;
  gap: 27px;
`;

export const BoxClick = styled('div')`
  cursor: pointer;
`;

export const TaskText = styled('div')`
  color: ${(props) => (props.resolved ? '#02B553' : '#18161F')};
  text-decoration: ${(props) => (props.resolved ? 'line-through' : 'none')};
`;
