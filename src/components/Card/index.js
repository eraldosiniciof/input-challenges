import React from 'react';
import { Icon } from '~/components/Icon';
import t from 'prop-types';

import { Container, StyledCard, Title, Currency } from './styles';

export function Card({ icon, title, currency }) {
  return (
    <Container>
      <StyledCard>
        <Icon name={icon} />
        <Title>{title}</Title>
        <Currency>{currency}</Currency>
      </StyledCard>
    </Container>
  );
}

Card.propTypes = {
  icon: t.string,
  title: t.string,
  currency: t.string,
};
