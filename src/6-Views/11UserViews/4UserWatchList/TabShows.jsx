import { Box, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MovieCard3 from "../../../2-Components/Cards/MovieCard3";

const TabShows = () => {
   const [moviedata, setMovieData] = React.useState([
    
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
              Your Watchlist is currently empty
            </Typography>
            <Typography className="text-whites-40 font-[Inter-Medium] text-lg max-w-[480px] text-center">
              Add <span className="underline">TV shows</span> and{" "}
              <span className="underline">Movies</span> that you want to watch
              later by clicking Add to{" "}
              <span className="underline">Watchlist</span>.
            </Typography>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default TabShows;

const Container = styled.div``;
