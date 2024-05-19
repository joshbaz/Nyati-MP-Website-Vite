import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import LogoImage from "../../1-Assets/logos/About/Logo.svg";
import { Typography } from "@mui/material";
import Buttons from "../../2-Components/Buttons/Buttons";
import HeroBg from "../../1-Assets/Hero2.svg";



const AboutHero = () => {
  return (
    <HeroContent className="flex flex-col overflow-hidden justify-center items-center">
      <img
        src={HeroBg}
        alt="Hero"
        className="flex absolute top-0 object-cover object-left-top h-full w-full slect-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(30%)", // Adjust brightness if needed
        }}
      />
      <div className="flex absolute top-0 object-cover h-full w-full slect-none  bg-gradient-to-b from-transparent to-secondary-800" />
      <Stack spacing={"54px"} className="text-center items-center z-10 ">
        {/** logo */}
        <ImageContainer className="w-[201px] h-[200px]">
          <img src={LogoImage} alt={"Nyati Films"} />
        </ImageContainer>

        <Typography className="text-[#F2F2F2] text-[40px] text-center select-none font-[Inter-Bold]">
          Where Epic Stories Transcend{" "}
          <span className="block">Entertainment</span>
        </Typography>
      </Stack>

      <Buttons
        variant="ghost"
        className="text-whites-40 absolute left-0 right-0 w-[121px] mx-auto bottom-1 space-y-1"
      >
        <Typography className="font-[Inter-Regular] text-sm lg:text-base">
          learn more
        </Typography>
        <span className="icon-[solar--round-alt-arrow-down-broken] w-5 h-5"></span>
      </Buttons>
    </HeroContent>
  );
};

export default AboutHero;
const HeroContent = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const ImageContainer = styled(Stack)`
  opacity: 1;
  img {
    height: 100%;
  }
`;
