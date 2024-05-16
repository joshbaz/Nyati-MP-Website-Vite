import React from "react";
import "./Stepper.css";
import { Box, Stack } from "@chakra-ui/react";
const TicketStepper = ({ stepperData }) => {
  return (
    <Box className="flex flex-col h-[100%] w-full relative gap-[34px]">
      {stepperData?.map((data, index) => {
        return (
          <Box key={index} className=" flex items-center gap-[33px] step-item">
            <Box className="h-max step">
              <Stack
                direction="column"
                spacing={"0px"}
                className="text-[#F2F2F2] text-center font-[Inter-SemiBold] select-none leading-tight "
              >
                <p className="text-[17px]">FEB</p>
                <p className="text-[38px]">3</p>
                <p className="text-[17px]">2024</p>
              </Stack>
            </Box>
            <Box className="step-image h-[174px] w-[340px]">
              <img src={data.poster} alt={""} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TicketStepper;
