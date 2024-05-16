import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import DetailHero from "./DetailHero";
import DetailTabs from "./DetailTabs";
import FilmData from '../../1-Assets/data/films_metadata.json'
import Footer from "../../2-Components/Footer/Footer";
const FilmsDetailPage = () => {
  const [selectedFilm, setSelectedFilm] = React.useState(null);

  React.useEffect(() => {
    setSelectedFilm(()=> FilmData[3])
  }, [FilmData])
  

 
  return (
    <Container className="w-full h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation />

      <Stack className="flex-col w-full h-full space-y-0">
        <DetailHero filmData={selectedFilm}  />
        <div className="px-16">
          <DetailTabs filmData={selectedFilm} />
        </div>
      </Stack>
      <Footer />
    </Container>
  );
};

export default FilmsDetailPage;

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
