import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import TheatresHero from "./TheatresHero";
import TheatrePrograms from "./TheatrePrograms";
import Footer from "../../2-Components/Footer/Footer";
const ThreatresPage = () => {
  return (
    <Container className="w-full min-h-screen h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation />

      <Stack direction={"column"} spacing={"0"} w="100%" h="100%">
        <TheatresHero />
        <TheatrePrograms />
      </Stack>
      <Footer />
    </Container>
  );
};

export default ThreatresPage;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
