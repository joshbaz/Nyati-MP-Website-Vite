import { Box, Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import Buttons from '../../../2-Components/Buttons/Buttons';
import styled from 'styled-components';

const UserHero = ({ filmData }) => {
    const [backDropUrl, setBackdropUrl] = React.useState(null);

    React.useEffect(() => {
      if (
        filmData?.Type.toLowerCase().includes("series") ||
        (filmData?.Type.toLowerCase().includes("segment") &&
          filmData?.Seasons?.length > 0)
      ) {
        if (
          filmData?.Seasons[0].Episodes.length > 0 &&
          filmData?.Seasons[0].Episodes[0].Backdrops.length > 0
        ) {
          let bklink = filmData?.Seasons[0].Episodes[0].Backdrops[0];

          setBackdropUrl(() => bklink);
        }
      } else {
        if (
          filmData?.Type.toLowerCase().includes("film") ||
          (filmData?.Type.toLowerCase().includes("movie") &&
            filmData?.Backdrops?.length > 0)
        ) {
          setBackdropUrl(() => filmData?.Backdrops[0]);
        }
      }
    }, [filmData]);
  return (
    <HeroContent
      className={`flex flex-col h-screen w-screen bg-cover bg-no-repeat bg-fixed relative`}
    >
      <img
        src={backDropUrl ? backDropUrl : ""}
        alt=""
        className="flex absolute top-0 object-cover h-full w-full slect-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(50%)", // Adjust brightness if needed
        }}
      />
      <div className="flex absolute top-0 object-cover h-full w-full slect-none  bg-gradient-to-b from-transparent to-secondary-800" />
      <Box className="mx-auto h-screen px-16 py-32 flex items-center">
        <Box className="flex flex-col relative  h-screen w-screen ">
          <Box className="w-max absolute left-0 bottom-20">
            <Stack
              spacing={"24px"}
              className="flex flex-col  mx-auto max-w-3xl text-left md:max-w-full  lg:w-[500px] overflow-hidden"
            >
              <Typography className="font-[Inter-Bold] text-5xl text-whites-40 select-none">
                {filmData?.Title}
              </Typography>
              <Typography className="font-[Inter-Regular] text-[#EEF1F4] text-base text-ellipsis select-none">
                {filmData?.PlotSummary}
              </Typography>

              {filmData?.Type.toLowerCase().includes("series") ||
              filmData?.Type.toLowerCase().includes("segment") ? (
                <div>
                  {filmData?.Seasons?.length > 0 && (
                    <Typography className="font-[Inter-Regular] text-[#EEF1F4] text-base text-ellipsis select-none">
                      {filmData?.Seasons[0].SeasonTitle}
                    </Typography>
                  )}
                </div>
              ) : null}

              <Stack
                direction="row"
                className="flex flex-row items-start space-x-8 select-none"
              >
                <Typography className="font-[Inter-Regular] text-[#FFFAF6] text-base">
                  {filmData?.Year}
                </Typography>
                <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-8 text-base flex-wrap gap-y-3 items-start justify-start">
                  <li className="w-max">{filmData?.Type} </li>

                  {filmData?.Genre?.length > 0 && (
                    <>
                      {filmData?.Genre?.map((data, index) => (
                        <li key={index} className="w-max">
                          {data}
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </Stack>

              {/** watch button */}
              <Stack
                direction={"column"}
                spacing={"20px"}
                className="select-none"
              >
                <Stack direction="row">
                  <span className="icon-[solar--bag-heart-outline] h-6 w-6 text-primary-500"></span>
                  <Typography className="font-[Inter-Medium] text-base text-whites-40">
                    Free to watch
                  </Typography>
                </Stack>

                <Buttons className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]">
                  <span className="icon-[solar--play-circle-linear] h-6 w-6 text-whites-40"></span>
                  <Typography className="font-[Roboto-Regular] text-base">
                    Watch
                  </Typography>
                </Buttons>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </HeroContent>
  );
};

export default UserHero

const HeroContent = styled.div``;