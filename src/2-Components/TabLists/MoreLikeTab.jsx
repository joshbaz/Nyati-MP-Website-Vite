import { Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import FilmJson from '../../1-Assets/data/films_metadata.json'
import MovieCard from '../Cards/MovieCard';
const MoreLikeTab = ({ filmdata }) => {
    const [allMovies, setAllMovies] = React.useState([]);

     React.useEffect(() => {
       setAllMovies(() => FilmJson);
     }, []);
  return (
      <Container>
      
          <Stack spacing={'20px'} className="flex-row flex-wrap w-full">
              {
                 allMovies.map((data, index) => {
                      return <MovieCard key={index} data={data} stylecard={"w-300px"} />;
                  })
          }
          
          </Stack>
      
      </Container>
  )
}

export default MoreLikeTab

const Container = styled(Stack)``