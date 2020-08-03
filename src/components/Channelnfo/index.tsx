import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const Channelnfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat-Livre</Title>

      <Separator />

      <Description>Canal aberto para conversar</Description>
    </Container>
  );
};

export default Channelnfo;
