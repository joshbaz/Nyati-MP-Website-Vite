import React from 'react'
import styled from 'styled-components';
import TicketImag from "../../1-Assets/TK.svg";
import { Box, Stack } from '@chakra-ui/react';
const TheatresHero = () => {
  return (
    <Container className="w-full bg-[#141118] py-20 pt-28  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack
          direction="row"
          className="flex px-[2%] flex-wrap gap-0 items-center justify-center mx-auto"
        >
          <Box className="w-full h-full">
            <img src={TicketImag} className="w-full h-full object-fill" alt={""} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default TheatresHero

const Container = styled.section``