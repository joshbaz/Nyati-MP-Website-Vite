import React from 'react'
import Footer from '../../2-Components/Footer/Footer';

import PressHero from './PressHero';
import styled from 'styled-components';
import WebNavigation from '../../2-Components/Navigation/WebNavigation';
import { Stack } from '@chakra-ui/react';
import PressFeatured from './PressFeatured';
const PressPage = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />

      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <PressHero />
       <PressFeatured />
      </Stack>
      <Footer />
    </Container>
  );
}

export default PressPage

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;