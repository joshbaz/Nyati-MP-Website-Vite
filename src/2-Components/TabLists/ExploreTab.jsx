import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Advert from "../../6-Views/3Films/Advert";
import { Typography } from "@mui/material";
import TicketStepper from "../Steppers/TicketStepper";
import posterImage2 from "../../1-Assets/images/Tickets/current.png";
import posterImage3 from "../../1-Assets/images/Tickets/current.png";


const stepperArray2 = [
  {
    date: "24-feb-2024",
    poster: posterImage2,
  },
  {
    date: "24-feb-2024",
    poster: posterImage3,
  }
 
];
const ExploreTab = () => {
  return (
    <Container spacing={"0"}>
      <Advert />

      <Stack className="flex-row w-full justify-center space-x-[100px]">
        {/** tickets */}
        <Stack className="flex-col items-center space-y-5">
          <Stack spacing={"10px"} className="w-max">
            <Typography className="text-[#F2F2F2] text-2xl text-center select-none font-[Inter-SemiBold]">
              In Theaters
            </Typography>
            <Typography className="text-[#F2F2F2] text-base text-center select-none font-[Inter-Medium]">
              {" "}
              Get tickets to these films now!
            </Typography>
          </Stack>
          <Box>
            <TicketStepper stepperData={stepperArray2} />
          </Box>
        </Stack>
        {/** contact information */}
        <Stack spacing={"20px"} className="flex-col items-center">
          <Stack className="flex-col items-center">
            <Typography className="Inter-[Semi-Bold] text-whites-40 text-4xl">
              For More Information
            </Typography>
            <Typography className="Inter-[Semi-Bold] text-whites-40 text-4xl">
              Contact Us
            </Typography>
          </Stack>

          <Stack spacing={"2px"} className="flex-col items-center">
            <Typography className="font-[Inter-Medium] text-xl text-[#FFFAF6] text-opacity-70">
              Call
            </Typography>
            <Typography className="font-[Inter-Medium] text-xl text-[#FFFAF6] text-opacity-70">
              +256 778 787 660
            </Typography>
            <Typography className="font-[Inter-Medium] text-xl text-[#FFFAF6] text-opacity-70">
              +256 702 074337
            </Typography>
          </Stack>
          <Stack spacing={"2px"} className="flex-col items-center">
            <Typography className="font-[Inter-Medium] text-xl text-[#FFFAF6] text-opacity-70">
              WhatsApp
            </Typography>
            <Typography className="font-[Inter-Medium] text-xl text-[#FFFAF6] text-opacity-70">
              +256 791 896 110
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ExploreTab;
const Container = styled(Stack)``;
