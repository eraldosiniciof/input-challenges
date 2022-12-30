import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';

import { ReactComponent as logoPix } from './svgs/LogoPix.svg';
import { ReactComponent as avatar } from './svgs/Avatar.svg';
import { ReactComponent as avatar02 } from './svgs/Avatar02.svg';
import { ReactComponent as comment } from './svgs/Comment.svg';
import { ReactComponent as view } from './svgs/View.svg';
import { ReactComponent as logoCodarme } from './svgs/LogoCodarme.svg';
import { ReactComponent as classes } from './svgs/Classes.svg';
import { ReactComponent as community } from './svgs/Community.svg';
import { ReactComponent as start } from './svgs/Start.svg';
import { ReactComponent as support } from './svgs/Support.svg';
import { ReactComponent as like } from './svgs/Like.svg';
import { ReactComponent as lightning } from './svgs/Lightning.svg';
import { ReactComponent as logo } from './svgs/Logo.svg';
import { ReactComponent as user } from './svgs/User.svg';
import { ReactComponent as board } from './svgs/Board.svg';
import { ReactComponent as check } from './svgs/Check.svg';
import { ReactComponent as frame } from './svgs/Frame.svg';
import { ReactComponent as remove } from './svgs/Remove.svg';
import { ReactComponent as task } from './svgs/Task.svg';

const icons = {
  logoPix,
  avatar,
  avatar02,
  comment,
  view,
  logoCodarme,
  classes,
  community,
  start,
  support,
  like,
  lightning,
  logo,
  user,
  board,
  check,
  frame,
  remove,
  task,
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
