import { useRef } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import Panel from './components/Panel';
import ScrollLink from './components/ScrollLink';
import Image from './components/Image';

import './App.css';

const projects = [
  {
    name: 'Project 1',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl5N6I7Fzc_6hEIMygNe9nv6KNab1sJXlsFp14GeKsoYQLiqNHghDZbjOnWp0tlygFYhSg_0KC5pp7LRBouxFLWp_EdriIivmtpEmHY6k&usqp=CAc',
  },
  {
    name: 'Project 2',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSATaJLVqp-lpOIpE_e0lHne9pJCeWRRnFAo2uYroqCxnWFeBgoiZKGU_QyUoWXwY4dqp00adKG3ty8t9X2nf4Qe_uIAQ5Jnyop0nbJG09vh-_AntlvE0NZaFEbTCutD2aMcyn7HWI&usqp=CAc',
  },
  {
    name: 'Project 3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fHby52n118Sfq2iX-8oT_zbS-Bp1DsP_EA&s',
  },
  {
    name: 'Project 4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanC03K2bmY_vcNWTXOmyw9vP9OpMh0YD-xg&s',
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
      <Stack gap={5}>
        <Panel ref={aboutRef}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
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
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2">About</Typography>
            <Typography variant="h6">
              Ray Salazar is a tailor based in the San Francisco Bay Area. Ray works on a
              variety of projects such as bags, jackets, and custom work.
            </Typography>
          </Box>
        </Panel>
        <Panel ref={workRef}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h2">Work</Typography>
              <Grid container>
                {projects.map((project, i) => (
                  <Image key={i} name={project.name} image={project.image} />
                ))}
              </Grid>
            </Box>
          </Box>
        </Panel>
        <Panel ref={contactRef}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
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
      </Stack>
    </ThemeProvider>
  );
}

export default Home;
