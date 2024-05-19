import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import { Stack } from "@chakra-ui/react";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutVision from "./AboutVision";
import AboutImpact from "./AboutImpact";
import Footer from "../../2-Components/Footer/Footer";
import AboutFunding from "./AboutFunding";
import AboutShows from "./AboutShows";
import FAQ from "../2Home/FAQ";

const AboutPage = () => {
  return (
    <Container className="w-full min-h-screen h-full relative flex-col space-y-0 bg-secondary-800 overflow-hidden">
      <WebNavigation />

      <Stack
        direction={"column"}
        spacing={"0"}
        w="100%"
        h="100%"
        className="overflow-hidden"
      >
        <AboutHero />
        <AboutIntro />
        <AboutVision />
        <AboutImpact />
        <AboutFunding />
        <FAQ />
      </Stack>
      <Footer />
    </Container>
  );
};

export default AboutPage;

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
