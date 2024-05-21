import React from "react";
import Sidebar from "../../../2-Components/Navigation/Sidebar";
import STopbar from "../../../2-Components/Navigation/STopbar";
import { Box, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import Buttons from "../../../2-Components/Buttons/Buttons";
import UViewTabs from "./UViewTabs";

const UViewActivity = () => {
  return (
    <Stack
      spacing={"0"}
      className="max-h-screen h-[100vh] w-full flex flex-col bg-whites-900 relative"
    >
      <STopbar />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 relative h-screen overflow-x-hidden overflow-y-auto">
        <Sidebar />

        <div className="bg-secondary-700 h-full px-[38px] pt-[14px] pb-[40px]">
          <UViewTabs />
        </div>
      </div>
    </Stack>
  );
};

export default UViewActivity;
