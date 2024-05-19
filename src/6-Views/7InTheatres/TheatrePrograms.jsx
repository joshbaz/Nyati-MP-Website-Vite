import React from 'react'
import posterImage2 from "../../1-Assets/images/Tickets/current.png";
import posterImage3 from "../../1-Assets/images/Tickets/current.png";
import styled from 'styled-components';
import { Box, Stack } from '@chakra-ui/react';
import TicketStepper from '../../2-Components/Steppers/TicketStepper';
const TheatrePrograms = () => {

    const stepperArray2 = [
      {
        date: "24-feb-2024",
        poster: posterImage2,
      },
      {
        date: "24-feb-2024",
        poster: posterImage3,
      },
    ];

    const stepperArray = [
      {
        date: "24-feb-2024",
        poster: posterImage2,
      },
      {
        date: "24-feb-2024",
        poster: posterImage3,
      },
    ];
  return (
    <Container className="w-full bg-[#141118] py-6 pb-24  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-16  xl:gap-24 items-start xl:px-[10%] ">
        {/** In Theatres */}
        <Stack direction="column" spacing={"38px"} className=" items-center">
          <Stack spacing={"10px"} className="w-max">
            <h1
              className="text-[#F2F2F2] text-[24px] text-center select-none font-[Inter-SemiBold]"
            
            >
              In Theaters
            </h1>
            <p
              className="text-[#F2F2F2] text-[15px] text-center select-none font-[Inter-Medium]"
              
            >
              Get tickets to these films now!
            </p>
          </Stack>

          <Box>
            <TicketStepper stepperData={stepperArray} />
          </Box>
        </Stack>
        {/** Past Releases */}
        <Stack direction="column" spacing={"38px"} className="items-center">
          <Stack spacing={"10px"} className="w-max">
            <h1
              className="text-[#F2F2F2] text-[24px] text-center select-none font-[Inter-SemiBold]"
              
            >
              Past Releases
            </h1>
            <p
              className="text-[#F2F2F2] text-[15px] text-center select-none font-[Inter-Medium]"
             
            >
              Stream from the comfort of your home today.
            </p>
          </Stack>

          <Box>
            <TicketStepper stepperData={stepperArray2} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default TheatrePrograms

const Container = styled.section`

`