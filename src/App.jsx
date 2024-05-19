import React,{ useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from '../tailwind.config.js';
import { StyledEngineProvider } from "@mui/material/styles"
import Home from './6-Views/2Home/Home.jsx';
import FilmsPage from './6-Views/3Films/FilmsPage.jsx';
import FilmsDetailPage from './6-Views/4FilmDetail/FilmsDetailPage.jsx';
import ThreatresPage from './6-Views/7InTheatres/ThreatresPage.jsx';
import AboutPage from './6-Views/8About/AboutPage.jsx';
import PressPage from './6-Views/9Press/PressPage.jsx';


function App() {
  let theme = React.useMemo(()=>createTheme(themeSettings),[])

  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:filmid" element={<FilmsDetailPage />} />
            <Route path="/intheatres" element={<ThreatresPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/about-nyati" element={<AboutPage />} />
            <Route path="/about/press" element={<PressPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App
