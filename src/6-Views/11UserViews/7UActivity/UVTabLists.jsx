import { Stack } from '@chakra-ui/react'
import { Box, Typography } from '@mui/material';
import React from 'react'
import Buttons from '../../../2-Components/Buttons/Buttons';

const UVTabLists = ({type}) => {
  return (
    <div className="w-full">
      {type === "Watched" && (
        <Stack spacing="20px">
          <Stack className="border-b-2 border-b-secondary-500 h-[52px] flex flex-row items-center justify-between ">
            <Box className="flex flex-row gap-10 flex-grow-1 text-whites-40">
              <Typography className="font-[Inter-Regular] text-sm">
                8 Sep, 2020
              </Typography>
              <Typography className="font-[Inter-Regular] text-sm">
                Addams Family Values
              </Typography>
            </Box>
            <Box className="flex flex-row items-center gap-10 flex-grow-1">
              <div className=" w-max h-max text-primary-500 px-2 py-1 border border-primary-500 rounded-lg bg-secondary-800 ">
                Movie
              </div>

              <Buttons
                variant="ghost"
                className="flex text-whites-40 px-2 py-1 items-center"
              >
                <span className="icon-[solar--trash-bin-trash-linear] h-6 w-6"></span>
              </Buttons>
            </Box>
          </Stack>
        </Stack>
      )}

      {type === "Watchlist" && (
        <Stack spacing="20px">
          <Stack className="border-b-2 border-b-secondary-500 h-[52px] flex flex-row items-center justify-between ">
            <Box className="flex flex-row gap-10 flex-grow-1 text-whites-40">
              <Typography className="font-[Inter-Regular] text-sm">
                8 Sep, 2020
              </Typography>
              <Typography className="font-[Inter-Regular] text-sm">
                Addams Family Values
              </Typography>
            </Box>
            <Box className="flex flex-row items-center gap-10 flex-grow-1">
              <div className=" w-max h-max text-primary-500 px-2 py-1 border border-primary-500 rounded-lg bg-secondary-800 ">
                Movie
              </div>

              <Buttons
                variant="ghost"
                className="flex text-whites-40 px-2 py-1 items-center"
              >
                <span className="icon-[solar--trash-bin-trash-linear] h-6 w-6"></span>
              </Buttons>
            </Box>
          </Stack>
        </Stack>
      )}

      {type === "Rated" && (
        <Stack spacing="20px">
          <Stack className="border-b-2 border-b-secondary-500 h-[52px] flex flex-row items-center justify-between ">
            <Box className="flex flex-row gap-10 flex-grow-1 text-whites-40">
              <Typography className="font-[Inter-Regular] text-sm">
                8 Sep, 2020
              </Typography>
              <Typography className="font-[Inter-Regular] text-sm">
                Addams Family Values
              </Typography>
            </Box>
            <Box className="flex flex-row items-center gap-10 flex-grow-1">
              <Buttons
                variant="ghost"
                className="flex text-whites-40 px-2 py-1 items-center"
              >
                <span className="icon-[solar--like-broken] h-6 w-6"></span>
              </Buttons>
              <div className=" w-max h-max text-primary-500 px-2 py-1 border border-primary-500 rounded-lg bg-secondary-800 ">
                Movie
              </div>

              <Buttons
                variant="ghost"
                className="flex text-whites-40 px-2 py-1 items-center"
              >
                <span className="icon-[solar--trash-bin-trash-linear] h-6 w-6"></span>
              </Buttons>
            </Box>
          </Stack>
        </Stack>
      )}
    </div>
  );
}

export default UVTabLists