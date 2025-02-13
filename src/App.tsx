import { useRef } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Panel from './components/Panel';
import ScrollLink from './components/ScrollLink';
import Image from './components/Image';

import './App.css';

const projects = [
  {
    name: '',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl5N6I7Fzc_6hEIMygNe9nv6KNab1sJXlsFp14GeKsoYQLiqNHghDZbjOnWp0tlygFYhSg_0KC5pp7LRBouxFLWp_EdriIivmtpEmHY6k&usqp=CAc',
  },
];

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Home() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Panel ref={aboutRef}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              gap: 20,
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
            <Box>
              <ScrollLink ref={aboutRef} section="About" />
              <ScrollLink ref={workRef} section="Work" />
              <ScrollLink ref={contactRef} section="Contact" />
            </Box>
          </Box>
        </Panel>
        <Panel ref={aboutRef}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 750,
              }}
            >
              <Typography variant="h2">About</Typography>
              <Typography variant="h6">
                Ray Salazar is a tailor based in the San Francisco Bay Area. Ray works on
                a variety of projects such as bags, jackets, and custom work.
              </Typography>
            </Box>
          </Box>
        </Panel>
        <Panel ref={workRef}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2">Work</Typography>
            <Box>
              {projects.map((project, i) => (
                <Image key={i} image={project.image} />
              ))}
            </Box>
          </Box>
        </Panel>
        <Panel ref={contactRef}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Typography variant="h2">Contact</Typography>
              <Typography variant="h6">Email: rayblesssalazar@gmail.com</Typography>
              <Typography variant="h6">Phone: 800 - 800 - 8000</Typography>
            </Box>
          </Box>
        </Panel>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
