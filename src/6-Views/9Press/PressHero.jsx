import { Box, Stack } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import HeroBg from "../../1-Assets/Hero2.svg";
import Buttons from '../../2-Components/Buttons/Buttons';
import { Typography } from '@mui/material';
const PressHero = () => {
  return (
    <HeroContent className="flex justify-center items-center">
      <Stack spacing={"54px"} className="text-center items-center ">
        <h1 className="text-[#F2F2F2] text-[60px] text-center select-none capitalize font-[Inter-Bold]">
          Stay up to Date <span className="block">with us</span>
        </h1>
      </Stack>

      <Buttons
        variant="ghost"
        className="text-whites-40 absolute left-0 right-0 w-[121px] mx-auto bottom-1 space-y-1"
      >
        <Typography className="font-[Inter-Regular] text-sm lg:text-base">
          Scroll Down
        </Typography>
        <span className="icon-[solar--round-alt-arrow-down-broken] w-5 h-5"></span>
      </Buttons>
    </HeroContent>
  );
}

export default PressHero

const HeroContent = styled.section`
  height: 100vh;
  display: flex;

  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) center/cover no-repeat;

  overflow: hidden;
  position: relative;

  .custombtn {
    background: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;