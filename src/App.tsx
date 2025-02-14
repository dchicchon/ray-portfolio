import { useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

import Panel from './components/Panel';
import ScrollLink from './components/ScrollLink';
import ImageLink from './components/ImageLink';
import { projects } from './utils/data';

import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Home() {
  const desktop = useMediaQuery('(min-width:600px)');
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Panel ref={aboutRef}>
        <Box
          sx={{
            my: 10,
            mx: 5,
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2">Ray Salazar</Typography>
            <Typography variant="h5">Tailor</Typography>
          </Box>

          {desktop && (
            <Box>
              <ScrollLink ref={aboutRef} section="About" />
              <ScrollLink ref={workRef} section="Work" />
              <ScrollLink ref={contactRef} section="Contact" />
            </Box>
          )}
        </Box>
      </Panel>
      <Panel ref={aboutRef}>
        <Box
          sx={{
            my: 10,
            mx: 5,
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Typography variant="h2">About</Typography>
          <Typography width={desktop ? '50%' : '100%'} variant="h6">
            Ray Salazar is a tailor based in the San Francisco Bay Area. Ray works on a
            variety of projects such as bags, jackets, and custom work.
          </Typography>
        </Box>
      </Panel>
      <Panel ref={workRef}>
        <Box
          sx={{
            my: 10,
            mx: 5,
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              my: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography variant="h2">Work</Typography>
            <Grid container>
              {projects.map((project, i) => (
                <ImageLink
                  key={i}
                  id={i}
                  description={project.description}
                  name={project.name}
                  image={project.image}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </Panel>
      <Panel ref={contactRef}>
        <Box
          sx={{
            my: 10,
            mx: 5,
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography variant="h2">Contact</Typography>
          <Typography variant="h6">Email: rayblesssalazar@gmail.com</Typography>
        </Box>
      </Panel>
    </ThemeProvider>
  );
}

export default Home;
