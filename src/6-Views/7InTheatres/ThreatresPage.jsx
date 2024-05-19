import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import TheatresHero from "./TheatresHero";
import TheatrePrograms from "./TheatrePrograms";
const ThreatresPage = () => {
  return (
    <Container className="w-screen min-h-screen h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation />

      <Stack direction={"column"} spacing={"0"} w="100%" h="100%">
        <TheatresHero />
        <TheatrePrograms />
      </Stack>
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
