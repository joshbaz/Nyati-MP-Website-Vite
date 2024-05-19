import { Box, Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import LogoImage from "../../1-Assets/logos/About/Logo.svg";
import styled from 'styled-components';
const NoMatch = () => {
     let location = useLocation();
    return (
      <Box className="h-screen w-screen bg-secondary-500 flex flex-col items-center justify-center gap-3">
        
        <ImageContainer className="w-40 h-40">
          <img src={LogoImage} alt={"Nyati Films"} />
        </ImageContainer>
        <Typography className="text-whites-600 font-[Inter-Bold] text-3xl uppercase">
          error: 404
        </Typography>
        <Typography className="text-primary-500 font-[Inter-Bold] text-3xl">
          No match for <code>{location.pathname}</code>
        </Typography>
      </Box>
    );
}

export default NoMatch

const ImageContainer = styled(Stack)`
  opacity: 1;
  img {
    height: 100%;
  }
`;