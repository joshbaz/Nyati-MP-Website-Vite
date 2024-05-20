import React from 'react'
import styled from 'styled-components';
import { Box, Stack } from "@chakra-ui/react";
import MovieCarousel from "../../../2-Components/Carousels/MovieCarousel";
import { Typography } from '@mui/material';
import Buttons from '../../../2-Components/Buttons/Buttons';
import MCarousel2 from '../../../2-Components/Carousels/MCarousel2';
const UserCategory = () => {
  return (
    <Container className="w-full bg-[#141118] py-16  overflow-hidden">
      {/** start watching */}
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack spacing={"20px"} className="pl-16 flex-col">
          <Typography className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[22px] text-left">
            Start Watching
          </Typography>

          <Stack className="flex w-full  gap-0 items-center justify-center mx-auto">
            <MovieCarousel />
          </Stack>
        </Stack>
      </Box>

      <Stack className="flex flex-col space-y-9">
        {/** Top picks */}
        <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
          <Stack spacing={"20px"} className="pl-16 flex-col">
            <Typography className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[22px] text-left">
              Top picks for you
            </Typography>

            <Stack className="flex w-full  gap-0 items-center justify-center mx-auto">
              <MCarousel2 />
            </Stack>
          </Stack>
        </Box>
        {/** Genres */}
        <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
          <Stack spacing={"20px"} className="pl-16 flex-col">
            <Stack className="flex-row space-x-3 items-center">
              <Typography className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[18px] text-left">
                Docuseries
              </Typography>

              <Buttons
                variant="ghost"
                className="flex items-center text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[18px] text-left hover:text-primary-500 py-0"
              >
                See more{" "}
                <span className="icon-[solar--alt-arrow-right-broken] w-6 h-6"></span>
              </Buttons>
            </Stack>

            <Stack className="flex w-full  gap-0 items-center justify-center mx-auto">
              <MCarousel2 />
            </Stack>
          </Stack>
        </Box>
        {/** kids */}
        <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
          <Stack spacing={"20px"} className="pl-16 flex-col">
            <Stack className="flex-row space-x-3 items-center">
              <Typography className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[18px] text-left">
                Family
              </Typography>

              <Buttons
                variant="ghost"
                className="flex items-center text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[18px] text-left hover:text-primary-500 py-0"
              >
                See more{" "}
                <span className="icon-[solar--alt-arrow-right-broken] w-6 h-6"></span>
              </Buttons>
            </Stack>

            <Stack className="flex w-full  gap-0 items-center justify-center mx-auto">
              <MCarousel2 />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default UserCategory

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;