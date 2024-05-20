import React from 'react'
import WebNavigation from '../../../2-Components/Navigation/WebNavigation';
import Footer from '../../../2-Components/Footer/Footer';
import UDetailHero from './UDetailHero';
import UFilmTabs from './UFilmTabs';
import FilmData from "../../../1-Assets/data/films_metadata.json";
import styled from "styled-components";
import { Box, Stack } from "@chakra-ui/react";

const UFilmDetailPage = () => {
      const [selectedFilm, setSelectedFilm] = React.useState(null);

      React.useEffect(() => {
        setSelectedFilm(() => FilmData[3]);
      }, [FilmData]);
  
  return (
    <Container className="w-full h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation isLoggedIn={true} />

      <Stack className="flex-col w-full h-full space-y-0">
        <UDetailHero filmData={selectedFilm} />
        <div className="px-16">
          <UFilmTabs filmData={selectedFilm} />
        </div>
      </Stack>
      <Footer />
    </Container>
  );
}

export default UFilmDetailPage

const Container = styled(Stack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;