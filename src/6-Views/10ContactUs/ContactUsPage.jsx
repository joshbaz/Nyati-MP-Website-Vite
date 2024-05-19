import React from 'react'
import WebNavigation from '../../2-Components/Navigation/WebNavigation';
import ContactUsHero from './ContactUsHero';
import ContactUsDetails from './ContactUsDetails';

import styled from 'styled-components';
import { Stack } from '@chakra-ui/react';
import Footer from '../../2-Components/Footer/Footer';
import FooterWatch from '../../2-Components/Footer/FooterWatch';

const ContactUsPage = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />

      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <ContactUsHero />
        <ContactUsDetails />
        <FooterWatch />
      </Stack>
      <Footer />
    </Container>
  );
}

export default ContactUsPage

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
