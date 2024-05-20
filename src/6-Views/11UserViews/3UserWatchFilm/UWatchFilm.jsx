import { Box } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import FullCustomPlayer from './FullCustomPlayer';
const UWatchFilm = () => {
  return (
    <Container className="w-screen h-screen bg-secondary-900 relative">
      <FullCustomPlayer />
      
    </Container>
  );
}

export default UWatchFilm

const Container = styled.div``