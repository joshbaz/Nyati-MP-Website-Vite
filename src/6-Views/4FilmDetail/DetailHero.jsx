import React from "react";
import styled from "styled-components";
import bgFilm from "../../1-Assets/images/Films/image16.svg";
import { Typography } from "@mui/material";
import { Box, Stack } from "@chakra-ui/react";
import Buttons from "../../2-Components/Buttons/Buttons";
const DetailHero = () => {
  return (
    <HeroContent
      className={`flex flex-col h-screen w-screen bg-cover bg-no-repeat bg-fixed relative`}
      style={{
        backgroundImage: `linear-gradient(
      180deg,
      rgba(22, 21, 22, 0.65),
      rgba(9, 7, 11, 0.987)
    ),url(${bgFilm})`,
      }}
    >
      <Box className="mx-auto h-screen px-16 py-32 flex items-center">
        <Box className="flex flex-col relative  h-screen w-screen ">
          <Box className="w-max absolute left-0 bottom-20">
            <Stack
              spacing={"24px"}
              className="flex flex-col  mx-auto max-w-3xl text-left md:max-w-full  lg:w-[500px] overflow-hidden"
            >
              <Typography className="font-[Inter-Bold] text-5xl text-whites-40 select-none">
                Fair Play
              </Typography>
              <Typography className="font-[Inter-Regular] text-[#EEF1F4] text-base text-ellipsis select-none">
                A group of young men become politically active when their
                football pitch is taken by a private investor, aided by their
                local councillor.
              </Typography>

              <Stack
                direction="row"
                className="flex flex-row items-start space-x-8 select-none"
              >
                <Typography className="font-[Inter-Regular] text-[#FFFAF6] text-base">
                  2010
                </Typography>
                <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-8 text-base flex-wrap gap-y-3 items-start justify-start">
                  <li className="w-max">Film </li>

                  <li className="w-max">Drama</li>

                  <li className="w-max">Documentary</li>
                </ul>
              </Stack>

              {/** watch button */}
              <Stack
                direction={"column"}
                spacing={"20px"}
                className="select-none"
              >
                <Stack direction="row">
                  <span className="icon-[solar--bag-heart-outline] h-6 w-6 text-primary-500"></span>
                  <Typography className="font-[Inter-Medium] text-base text-whites-40">
                    Free to watch
                  </Typography>
                </Stack>

                <Buttons className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]">
                  <span className="icon-[solar--play-circle-linear] h-6 w-6 text-whites-40"></span>
                  <Typography className="font-[Roboto-Regular] text-base">
                    Watch
                  </Typography>
                </Buttons>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </HeroContent>
  );
};

export default DetailHero;

const HeroContent = styled.div``;
