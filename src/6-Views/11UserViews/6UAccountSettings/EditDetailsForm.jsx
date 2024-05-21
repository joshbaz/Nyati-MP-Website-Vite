import { Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import CustomStack from "../../../2-Components/Stacks/CustomStack";
import { FormContainer } from "../../../2-Components/Stacks/InputFormStack";
import Buttons from "../../../2-Components/Buttons/Buttons";

const EditDetailsForm = () => {
  return (
    <Stack className="flex flex-col bg-secondary-800 min-w-[636px] max-w-[636px] px-[40px] py-[40px] w-max rounded-lg space-y-[30px]">
      <Typography className="text-[#F2F2F2] font-[Inter-SemiBold] text-lg">
        Edit Details
      </Typography>

      <CustomStack className="h-full w-full flex flex-col gap-5">
        {/** title && type */}
        <CustomStack className="flex-row justify-between gap-6">
          <FormContainer>
            <label className="label font-[Inter-Regular] text-xs text-whites-100 text-opacity-75">
              Full name (required)
            </label>
            <input />
          </FormContainer>
        </CustomStack>

        {/** genre */}
        <FormContainer>
          <label className="label font-[Inter-Regular] text-xs text-whites-100 text-opacity-75">
            Username (required)
          </label>
          <input />
        </FormContainer>
        {/** tagline */}
        <FormContainer>
          <label className="label font-[Inter-Regular] text-xs  text-whites-100 text-opacity-75">
            Email address
          </label>
          <input />
        </FormContainer>

        <FormContainer>
          <label className="label font-[Inter-Regular] text-xs  text-whites-100 text-opacity-75">
            Mobile number
          </label>
          <input />
        </FormContainer>

              {/** buttons */}
        <div className="border-t-2 border-t-secondary-500 relative">
          <div className="container flex items-center justify-end mt-4 mb-1 gap-[20px]">
            {/** back button */}
            <Buttons
              className={`bg-white text-slate-400 uppercase px-10 py-2 rounded-full cursor-pointer border border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out text-primary-500
             `}
            >
              close
            </Buttons>
            {/** next button */}
            <Buttons className="flex items-center uppercase rounded-full cursor-pointer bg-primary-700 px-10 py-2 font-[Roboto-Medium] hover:text-white transition duration-200 ease-in-out">
              Next
            </Buttons>
          </div>
        </div>
      </CustomStack>
    </Stack>
  );
};

export default EditDetailsForm;
