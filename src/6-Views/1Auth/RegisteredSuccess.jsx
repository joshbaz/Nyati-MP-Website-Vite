import React from "react";
import styled from "styled-components";

import { Stack, Box } from "@chakra-ui/react";

const RegisteredSuccess = () => {
  const [isSubmittingp, setIsSubmittingp] = React.useState(false);
  React.useEffect(() => {
    if (isSubmittingp) {
      setTimeout(() => {
        setIsSubmittingp(() => false);
        // navigation.navigate("Signin");
        alert("navigate to signin");
      }, 5000);
    } else {
      setTimeout(() => {
        setIsSubmittingp(() => true);
      }, 2000);
    }
  }, [isSubmittingp]);
  return (
    <Container>
      {" "}
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent className="flex justify-center items-center">
          <Stack
            direction="column"
            spacing="70px"
            className="max-w-[408px] mx-auto"
          >
            <Stack spacing={"30px"} className="w-full">
              <Stack className="mx-auto items-center">
                <Box className="w-max text-[#06CC6B]">
                  
                  <span
                    
                    className="icon-[hugeicons--checkmark-circle-04] h-6 w-6"
                  ></span>
                </Box>
                <h1 className="text-[35px] text-[#06CC6B] text-center font-[Inter-SemiBold]">
                  Congratulations!
                </h1>
              </Stack>
              <Stack spacing={"30px"}>
                <p className="text-[20px] text-[#d0cbca] text-center font-[Inter-Regular]">
                  Thank you, your account has successfully been created
                </p>
                <p className="text-[20px] text-[#d0cbca] text-center font-[Inter-Regular]">
                  A confirmation email has been sent to{" "}
                  <span className="text-[#F2F2F2]">email@gmail.com</span>
                </p>
              </Stack>
            </Stack>
          </Stack>
        </HeroContent>
      </Stack>
    </Container>
  );
};

export default RegisteredSuccess;


const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 100vh;
  background: rgba(10, 1, 16, 1);
  background-size: cover;

  .disabled {
    color: #ffffff;
    background: #ee5170;
    opacity: 50%;

    ::hover {
      background: #ee5170 !important;
    }
  }
`;

