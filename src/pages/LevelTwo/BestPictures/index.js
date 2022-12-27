import React, { useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import styled from 'styled-components';

import { format } from 'date-fns';

import img from '~/assets/img/img.png';
import profile from '~/assets/img/profile.png';
import bradyProfile from '~/assets/img/bradyProfile.png';
import coverPeople from '~/assets/img/coverPeople.png';
import tayaProfile from '~/assets/img/tayaProfile.png';
import coverFood from '~/assets/img/coverFood.png';

import { GenericCardWithImage } from '~/components/GenericCardWithImage';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const BoxContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: auto;

  padding: 10px;

  width: 80vw;
  height: 70vh;

  @media screen and (max-width: 400px) {
    width: 75vw;
    height: 75vh;
  }
`;

const BoxHeader = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 8px;

  margin-bottom: 16px;
`;

const Title = styled('div')`
  font-size: 24px;
  color: #787491;
`;

const BoxDay = styled('div')`
  font-size: 48px;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

function extractDay() {
  const weekDay = format(new Date(), 'EEEE', { locale: ptBR });
  const date = format(new Date(), 'dd/MM/yyyy');

  return `${weekDay[0].toUpperCase()}${weekDay.slice(1)}, ${date}`;
}

export function BestPicture() {
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

    {
      name: 'Brady Combs',
      title: 'Escolha do dia - Pessoas',
      cover: coverPeople,
      profile: bradyProfile,
      day: 3,
      nComment: 56,
      nView: 18,
    },

    {
      name: 'Taya Bates',
      title: 'Escolha do dia - Comida',
      cover: coverFood,
      profile: tayaProfile,
      day: 2,
      nComment: 88,
      nView: 72,
    },
  ]);

  return (
    <Container>
      <BoxContent>
        <BoxHeader>
          <Title>Melhores Fotos</Title>
          <BoxDay>{extractDay()}</BoxDay>
        </BoxHeader>
        <GenericCardWithImage data={mockData} />
      </BoxContent>
    </Container>
  );
}
