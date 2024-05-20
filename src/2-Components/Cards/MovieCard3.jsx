import React from "react";
import posterImage from "../../1-Assets/images/Movie poster/Movie poster.svg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Box, Stack } from "@chakra-ui/react";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const MovieCard3 = () => {
  return (
    <MovieContainer
      className={
        "min-h-[250px] h-max w-[292px] md:min-h-[510px] md:w-[300px] flex flex-col items-start gap-3 pixelated"
      }
    >
      <img
        src={posterImage}
        alt={"movie"}
        className="object-cover h-[389px] "
      />

      <div className="flex text-[#F8FAEC] text-[20px] text-center select-none relative font-[Inter-SemiBold] gap-3">
        <span className="icon-[solar--bag-heart-outline] h-6 w-6 text-primary-500"></span>

        <Typography className="font-[Inter-Medium] text-base">
          Free trial, rent or buy
        </Typography>
      </div>

      <div className="flex flex-row space-x-4 items-center">
        <Buttons className="flex py-2 px-2 rounded-full h-full w-full">
          <span className="icon-[solar--info-circle-outline] h-6 w-6 text-whites-500"></span>
        </Buttons>

        <Typography className="font-[Inter-Medium] text-base text-whites-40">
          2022
        </Typography>
      </div>

      <Typography className="font-[Inter-Medium] text-lg text-whites-40">
        An enchanting making-of story told through all-new in-depth interviews
        and cast conversations, inviting fans on a magical first-person journey
        through one of the most beloved
      </Typography>
    </MovieContainer>
  );
};

export default MovieCard3;

const MovieContainer = styled(Box)`
  &&.pixelated > img {
    image-rendering: pixelated !important;
  }
`;
