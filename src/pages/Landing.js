import Hero from "../components/Hero"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function Landing() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
      </ThemeProvider>
    </>

  );
}

export default Landing;