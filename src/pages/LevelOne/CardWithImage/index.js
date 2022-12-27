import React, { useState } from 'react';

import img from '~/assets/img/img.png';
import profile from '~/assets/img/profile.png';

import { GenericCardWithImage } from '~/components/GenericCardWithImage';

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
  return <GenericCardWithImage data={mockData} />;
}
