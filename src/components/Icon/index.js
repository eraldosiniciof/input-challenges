import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';

import { ReactComponent as logoPix } from './svgs/LogoPix.svg';
import { ReactComponent as avatar } from './svgs/Avatar.svg';
import { ReactComponent as avatar02 } from './svgs/Avatar02.svg';

const icons = {
  logoPix,
  avatar,
  avatar02,
};

const StyledIcon = styled('svg')`
  color: ${(props) => props.color};
`;

export function Icon({ name, color }) {
  return <StyledIcon as={icons[name]} color={color} />;
}

Icon.propTypes = {
  name: t.string,
  color: t.string,
};
