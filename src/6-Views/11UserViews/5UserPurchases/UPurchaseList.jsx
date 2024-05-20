import React from 'react'
import UPurchaseTabs from './UPurchaseTabs';
import WebNavigation from '../../../2-Components/Navigation/WebNavigation';
import Footer from '../../../2-Components/Footer/Footer';
import { Stack } from '@chakra-ui/react';
import styled from 'styled-components';

const UPurchaseList = () => {
  return (
    <Container className="w-full h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation isLoggedIn={true} />
      <Stack className="flex-col w-full h-full space-y-0">
        <div className="px-16 pt-36">
          <UPurchaseTabs />
        </div>
      </Stack>
      <Footer />
    </Container>
  );
}

export default UPurchaseList

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
