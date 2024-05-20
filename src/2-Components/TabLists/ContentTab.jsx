import { Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FooterWatch from "../Footer/FooterWatch";
const ContentTab = ({ filmdata, loggedIn }) => {
  return (
    <Container>
      <Stack direction="column" spacing={"12px"}>
        {/** audio languages */}
        {filmdata?.AudioLanguages?.length > 0 && (
          <Stack spacing={"14px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Audio Languages
            </Typography>
            <ul>
              {filmdata?.AudioLanguages?.map((data, index) => (
                <span
                  key={index}
                  className="font-[Inter-Regular] text-base text-[#706e72]"
                >
                  {(index ? ", " : "") + data.name}
                </span>
              ))}
            </ul>
          </Stack>
        )}
        {/** subtitles */}
        {filmdata?.subtitles && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Subtitles
            </Typography>
            <Typography className="font-[Inter-Regular] text-base text-[#706E72]">
              {filmdata?.subtitles}
            </Typography>
          </Stack>
        )}

        {/** Year Of Production */}
        {filmdata?.Year && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Year of Production
            </Typography>
            <Typography className="font-[Inter-Regular] text-base text-[#706E72]">
              {filmdata?.Year}
            </Typography>
          </Stack>
        )}

        {/** Starring */}
        {filmdata?.Actors?.length > 0 && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Starring
            </Typography>
            <ul>
              {filmdata?.Actors?.map((data, index) => (
                <span
                  key={index}
                  className="font-[Inter-Regular] text-base text-[#706E72]"
                >
                  {(index ? ", " : "") + data}
                </span>
              ))}
            </ul>
          </Stack>
        )}

        {/** Directors */}
        {filmdata?.Directors?.length > 0 && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Directors
            </Typography>
            <ul>
              {filmdata?.Directors?.map((data, index) => (
                <span
                  key={index}
                  className="font-[Inter-Regular] text-base text-[#706E72]"
                >
                  {(index ? ", " : "") + data}
                </span>
              ))}
            </ul>
          </Stack>
        )}

        {/** producers */}
        {filmdata?.Producers?.length > 0 && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Producers
            </Typography>
            <ul>
              {filmdata?.Producers?.map((data, index) => (
                <span
                  key={index}
                  className="font-[Inter-Regular] text-base text-[#706E72]"
                >
                  {(index ? ", " : "") + data}
                </span>
              ))}
            </ul>
          </Stack>
        )}

        {/** writerss */}
        {filmdata?.Writers?.length > 0 && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Writers
            </Typography>
            <ul>
              {filmdata?.Writers?.map((data, index) => (
                <span
                  key={index}
                  className="font-[Inter-Regular] text-base text-[#706E72]"
                >
                  {(index ? ", " : "") + data}
                </span>
              ))}
            </ul>
          </Stack>
        )}

        {/** sound core */}
        {filmdata?.SoundCore && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Sound Core
            </Typography>
            <Typography className="font-[Inter-Regular] text-base text-[#706E72]">
              {filmdata?.SoundCore}
            </Typography>
          </Stack>
        )}

        {/** overview */}
        {filmdata?.Overview && (
          <Stack spacing={"7px"}>
            <Typography className="font-[Inter-SemiBold] text-lg text-whites-40">
              Overview
            </Typography>
            <Typography className="font-[Inter-Regular] text-base text-[#706E72] text-justify">
              {filmdata?.Overview}
            </Typography>
          </Stack>
        )}
      </Stack>

      {!loggedIn && (
         <FooterWatch />
      )}
     
    </Container>
  );
};

export default ContentTab;

const Container = styled(Stack)``;
