import React from 'react'
import epiImage from "../../1-Assets/images/Films/episodePoster.svg";
import Buttons from "../Buttons/Buttons";
import { Typography } from "@mui/material";
import { Image, Stack } from '@chakra-ui/react';
const EpisodeContent = ({ seriesdata, episodedata }) => {
    const [playActions, setPlayActions] = React.useState(false);
    let ref = React.useRef();
    
    React.useEffect(() => {
      const handler = (event) => {
        if (playActions && ref.current && !ref.current.contains(event.target)) {
          setPlayActions(false);
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }, [playActions]);

     const onMouseEnter = () => {
       window.innerWidth > 960 && setPlayActions(true);
     };

     const onMouseLeave = () => {
       window.innerWidth > 960 && setPlayActions(false);
     };
  return (
    <Stack
      spacing={"25px"}
      className="flex-row w-full h-max justify-start items-start"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-start items-start w-max h-max ">
        <Image
          src={episodedata?.Posters?.length > 0 ? episodedata?.Posters[0] : ""}
          alt=""
          className="size-auto max-w-[338px] max-h-[250px] object-cover mx-0 my-0 rounded-lg"
        />
      </div>

      <Stack spacing={"30px"} className="w-full">
        <Stack>
          <Typography className="font-[Inter-SemiBold] text-xl text-whites-40">
            {`S${seriesdata?.SeasonCounter}`}{" "}
            {`E${episodedata?.EpisodeCounter}`} - {episodedata?.EpisodeTitle}
          </Typography>
          <Typography className="font-[Inter-Regular] text-base text-[#FFFAF6] text-opacity-70">
            3rd February 2024
          </Typography>
          <Typography className="font-[Inter-Regular] text-base text-[#FFFAF6] text-opacity-70 text-justify">
            See the history of the Kitara Empire, one of the largest empires in
            East and Central Africa. The detailed story of Omukama (king) John
            Cwa II Kabaleega, who was a paramount king of East Africa’s kingdoms
            and chiefdoms, encapsulates the thesis of the Tuko Pamoja (We are
            one) series
          </Typography>
        </Stack>
        <Stack spacing={"24px"}>
          <div className="flex flex-row space-x-2 ">
            <span className="icon-[solar--bag-heart-outline] w-6 h-6 text-primary-500"></span>
            <Typography className="font-[Inter-Medium] text-[#ffffff] text-base">
              Available to watch free trial
            </Typography>
          </div>
          {playActions ? (
            <Stack spacing={"20px"} className="flex flex-row">
              <Buttons className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]">
                <span className="icon-[solar--play-circle-linear] w-6 h-6"></span>
                <Typography className="font-[Roboto-Regular] text-base">
                  Trailer
                </Typography>
              </Buttons>
              <Buttons className="flex w-max px-8 py-2 items-center justify-center space-x-2 rounded-full relative font-[Roboto-Regular] text-base">
                Join to Watch
              </Buttons>
            </Stack>
          ) : (
            <Stack spacing={"20px"} className="flex flex-row h-10">
              <div></div>
              <div></div>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EpisodeContent