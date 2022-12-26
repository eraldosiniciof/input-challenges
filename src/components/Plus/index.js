import React from 'react';
import styled from 'styled-components';

import t from 'prop-types';

const Container = styled('div')`
  margin: 0 auto;
  padding: 8px;
`;

const Title = styled('div')`
  background-color: #00bdd8;

  font-size: 24px;
  font-weight: bold;

  padding: 8px 16px;
  border-radius: 8px;
`;

const Description = styled('div')`
  padding: 8px 16px;
`;

const List = styled('ol')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled('li')`
  &::before {
    content: '✅';
    margin: 8px;
  }
`;

export function Plus({ description }) {
  return (
    <Container>
      <Title>Extras aplicados ao desafio</Title>
      {description && (
        <Description>
          <List>
            {description.map((descriptionItem, index) => (
              <ListItem key={`key-${index}`}>{descriptionItem}</ListItem>
            ))}
          </List>
        </Description>
      )}
    </Container>
  );
}

Plus.propTypes = {
  description: t.arrayOf(t.string),
};
