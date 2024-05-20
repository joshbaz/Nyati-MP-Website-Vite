import React from "react";
import CustomStack from "../../../2-Components/Stacks/CustomStack";
import styled from "styled-components";
import WebNavigation from "../../../2-Components/Navigation/WebNavigation";
import FilmData from "../../../1-Assets/data/films_metadata.json";
import UserHero from "./UserHero";
import UserCategory from "./UserCategory";
import Footer from "../../../2-Components/Footer/Footer";

const UserHome = () => {
  const [selectedFilm, setSelectedFilm] = React.useState(null);

  React.useEffect(() => {
    setSelectedFilm(() => FilmData[3]);
  }, [FilmData]);
  return (
    <Container className="space-y-0 flex-col relative w-full h-full overflow-x-hidden">
          <WebNavigation isLoggedIn={true} />

      <CustomStack className="flex-col w-full h-full">
              <UserHero filmData={selectedFilm} />
              
              <UserCategory />
          </CustomStack>
          <Footer />
    </Container>
  );
};

export default UserHome;

const Container = styled(CustomStack)``;
