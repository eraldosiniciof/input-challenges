import React from 'react';
import t from 'prop-types';

import { Box, Description } from './styles';

export function Option({ to, name, description }) {
  return (
    <>
      <Box to={to}>{name}</Box>
      <Description>{description}</Description>
    </>
  );
}

Option.propTypes = {
  to: t.string,
  name: t.string,
  description: t.string,
};
