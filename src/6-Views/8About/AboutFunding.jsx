import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

const AboutFunding = () => {
    return <Container className="w-full bg-[#18151c] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-24 items-start">
        <Stack>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[46px] text-center font-[Inter-SemiBold]"
           
          >
            Crowdfunding
          </h1>

          <Stack spacing={"30px"} className="mx-auto items-center">
            <p
              className="text-[#FFFAF6] opacity-[70%] text-[19px] text-center max-w-[689px] font-[Inter-Regular]"
             
            >
              We are building a community of thousands of investors to finance
              creative projects that will be created, funded, and distributed.
              We are a team of passionate creators using our visual media to
              engage the Easter African and audience.
            </p>
            <Box
              as="button"
              className="block w-full rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-whites-40 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16"
            >
              Send us a Donation
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>;
};

export default AboutFunding;

const Container = styled.section`
  min-height: 54vh;
  background-size: cover;
`;
