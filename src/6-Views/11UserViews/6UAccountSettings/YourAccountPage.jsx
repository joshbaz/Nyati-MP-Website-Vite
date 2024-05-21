import React from "react";
import Sidebar from "../../../2-Components/Navigation/Sidebar";
import STopbar from "../../../2-Components/Navigation/STopbar";
import { Box, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import Buttons from "../../../2-Components/Buttons/Buttons";
import EditDetailsForm from "./EditDetailsForm";
import EditPassword from "./EditPassword";

const YourAccountPage = () => {
  return (
    <Stack
      spacing={"0"}
      className="max-h-screen h-[100vh] w-full flex flex-col bg-whites-900 relative"
    >
      <STopbar />

      <div className="grid grid-cols-[auto,1fr] flex-grow-1 relative h-screen overflow-x-hidden overflow-y-auto">
        <Sidebar />

        {/** content */}
        <div className="bg-secondary-700 h-full px-[38px] pt-[14px] pb-[40px]">
          <Stack direction="column" spacing="48px">
            {/** account */}
            <Stack spacing="35px">
              <div className="flex flex-col space-y-1">
                <Typography className="text-whites-40 text-[18px] font-[Inter-SemiBold] ">
                  Account{" "}
                </Typography>
                <Typography className="text-whites-40 text-[14px] font-[Inter-SemiBold] text-opacity-40">
                  Membership Details
                </Typography>
              </div>

              <Stack className="flex flex-col space-y-2">
                {/** acc details */}
                <Box className="flex flex-row items-center justify-between min-h-[155px] bg-[#36323e] min-w-[70%] w-max rounded-lg px-[35px] py-[20px] text-whites-40 space-y-2">
                  <Stack>
                    <Typography className="font-[Inter-Medium] text-[20px]">
                      User Details
                    </Typography>

                    <Stack>
                      <Typography className="font-[Inter-Regular] text-[15px]">
                        Member since {`{{Month}  }`} {`{{Year}  }`}
                      </Typography>
                      <Typography className="font-[Inter-Regular] text-[15px]">
                        {`{{Username}}`}
                      </Typography>
                      <Typography className="font-[Inter-Regular] text-[15px]">
                        {`{{Fullname}}`}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Buttons className="rounded-full h-max px-10 font-[Roboto-Medium]">
                    Update
                  </Buttons>
                </Box>
                {/** acc details */}
                <Box className="flex flex-row items-center justify-between min-h-[75px] bg-[#36323e] min-w-[70%] w-max rounded-lg px-[35px] py-[20px] text-whites-40 space-y-2">
                  <Stack spacing="0">
                    <Box className="flex items-start space-x-2">
                      <span className="icon-[solar--letter-linear] h-6 w-6"></span>
                      <Typography className="font-[Inter-Medium] text-[20px]">
                        Email
                      </Typography>
                    </Box>
                    <Typography className="font-[Inter-Regular] text-[15px] pl-8">
                      jdg@gmail.com
                    </Typography>
                  </Stack>
                </Box>
                {/** acc details */}
                <Box className="flex flex-row items-center justify-between min-h-[55px] bg-[#36323e] min-w-[70%] w-max rounded-lg px-[35px] py-[20px] text-whites-40 space-y-2">
                  <Stack spacing="0">
                    <Box className="flex items-start space-x-2">
                      <span className="icon-[solar--smartphone-linear] h-6 w-6"></span>
                      <Typography className="font-[Inter-Medium] text-[19px]">
                        Mobile Number
                      </Typography>
                    </Box>
                    <Typography className="font-[Inter-Regular] text-[15px] pl-8">
                      +2567878s74343478
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
            {/** security */}

            <Stack spacing="15px">
              <div className="flex flex-col space-y-1">
                <Typography className="text-whites-40 text-[18px] font-[Inter-SemiBold] uppercase">
                  Security
                </Typography>
              </div>

              <Box className="flex flex-row items-center justify-between min-h-[55px] bg-[#36323e] min-w-[70%] w-max rounded-lg px-[35px] py-[20px] text-whites-40 space-y-2">
                <Stack>
                  <Box className="flex items-center space-x-2">
                    <span className="icon-[solar--lock-password-linear] h-6 w-7"></span>
                    <Typography className="font-[Inter-Medium] text-[20px]">
                      Password
                    </Typography>
                  </Box>
                </Stack>

                <Buttons className="rounded-full h-max px-10 font-[Roboto-Medium]">
                  Change
                </Buttons>
              </Box>
            </Stack>
          </Stack>
        </div>
          </div>
          
          {
              /****
               * 
               * <div className="absolute top-0 h-screen w-screen flex items-center justify-center">
            <EditPassword />
          </div>
    
               * 
               * 
               */
          }
          
    </Stack>
  );
};

export default YourAccountPage;
