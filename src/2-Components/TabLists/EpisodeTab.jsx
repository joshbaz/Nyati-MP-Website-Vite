import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import EpisodeContent from "./EpisodeContent";


const EpisodeTab = ({ filmdata }) => {
  return (
    <Container>
      {filmdata?.Seasons[0].Episodes?.length > 0 && (
        <Stack spacing={"63px"} className="flex flex-col">
          {filmdata?.Seasons[0].Episodes?.map((data, index) => {
            return (
              <EpisodeContent
                key={index}
                seriesdata={filmdata?.Seasons[0]}
                episodedata={data}
              />
            );
          })}
        </Stack>
      )}
    </Container>
  );
};

export default EpisodeTab;

const Container = styled(Stack)`
  img {
    image-rendering: auto !important;
  }
`;
