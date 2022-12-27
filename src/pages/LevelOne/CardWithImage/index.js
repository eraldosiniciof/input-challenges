import React, { useState } from 'react';

import styled from 'styled-components';

import img from '~/assets/img/img.png';
import profile from '~/assets/img/profile.png';

import { GenericCardWithImage } from '~/components/GenericCardWithImage';

const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export function CardWithImage() {
  const [mockData] = useState([
    {
      name: 'Lynsey Searle',
      title: 'Escolha do dia - Natureza',
      cover: img,
      profile,
      day: 1,
      nComment: 72,
      nView: 24,
    },
  ]);
  return (
    <Container>
      <GenericCardWithImage data={mockData} />
    </Container>
  );
}
