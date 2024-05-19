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
import ContactUsPage from './6-Views/10ContactUs/ContactUsPage.jsx';
import ErrorPage from './6-Views/0OtherPages/ErrorPage.jsx';
import NoMatch from './6-Views/0OtherPages/NoMatch.jsx';
import SignIn from './6-Views/1Auth/SignIn.jsx';
import Register from './6-Views/1Auth/Register.jsx';


function App() {
  let theme = React.useMemo(()=>createTheme(themeSettings),[])

  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
            <Route
              path="/films"
              element={<FilmsPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/films/:filmid"
              element={<FilmsDetailPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/intheatres"
              element={<ThreatresPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/about/about-nyati"
              element={<AboutPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/about/press"
              element={<PressPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/about/contactus"
              element={<ContactUsPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/auth/signin"
              element={<SignIn />}
              errorElement={<ErrorPage />}
            />

            <Route
              path="/auth/register"
              element={<Register />}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App
