import React from 'react';
import t from 'prop-types';

import { Button, Description, Box } from './styles';

export function Option({ to, name, description }) {
  return (
    <Box>
      <Button to={to}>{name}</Button>
      <Description>{description}</Description>
    </Box>
  );
}

Option.propTypes = {
  to: t.string,
  name: t.string,
  description: t.string,
};
