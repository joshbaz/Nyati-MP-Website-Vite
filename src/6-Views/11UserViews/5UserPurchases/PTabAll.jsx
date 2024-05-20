import { Box, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MovieCard3 from "../../../2-Components/Cards/MovieCard3";

const PTabAll = () => {
  const [moviedata, setMovieData] = React.useState([
    {
      title: "1",
    },
  ]);
  return (
    <Container className=" h-full relative">
      {moviedata.length > 0 ? (
        <Stack className="flex flex-row flex-wrap">
          <MovieCard3 />
        </Stack>
      ) : (
        <Box className="h-[100%]">
          <Stack className="flex flex-col h-full w-full min-h-[45vh] items-center justify-center my-auto">
            <Typography className="text-whites-40 font-[Inter-Medium] text-lg">
              You don't have any Purchases or Rentals
            </Typography>
            <Typography className="text-whites-40 font-[Inter-Medium] text-lg max-w-[480px] text-center">
              If videos you were expecting aren't shown, make sure you're signed
              in and using the correct user account and then refresh this page.
            </Typography>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default PTabAll;

const Container = styled.div``;
