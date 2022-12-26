import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';

import { ReactComponent as logoPix } from './svgs/LogoPix.svg';
import { ReactComponent as avatar } from './svgs/Avatar.svg';
import { ReactComponent as avatar02 } from './svgs/Avatar02.svg';
import { ReactComponent as comment } from './svgs/Comment.svg';
import { ReactComponent as view } from './svgs/View.svg';

const icons = {
  logoPix,
  avatar,
  avatar02,
  comment,
  view,
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
