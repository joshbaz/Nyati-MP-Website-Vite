import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../../2-Components/Navigation/WebNavigation";
import Footer from "../../../2-Components/Footer/Footer";
import UWatchTabs from "./UWatchTabs";
const UWatchList = () => {
  return (
    <Container className="w-full h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation isLoggedIn={true} />
      <Stack className="flex-col w-full h-full space-y-0">
        <div className="px-16 pt-36">
          <UWatchTabs />
        </div>
      </Stack>
      <Footer />
    </Container>
  );
};

export default UWatchList;

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
