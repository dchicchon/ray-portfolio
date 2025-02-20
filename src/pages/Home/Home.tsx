import { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Panel from '../../components/Panel';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import ScrollLink from '../../components/ScrollLink';
import ImageLink from '../../components/ImageLink';
import { repairProjects, upcyclingProjects, workshopProjects } from '../../utils/data';

function Home() {
  const desktop = useMediaQuery('(min-width:600px)');
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
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
          <Typography sx={{mt:5}} variant="h2">About</Typography>
          <Typography width={desktop ? '50%' : '100%'} variant="h6">
            I am a skilled tailoring and repair specialist with a passion for product
            longevity, sustainable fashion, and circularity. I specialize in garment
            repairs, alterations, and material reinforcement—ensuring durability,
            performance, and quality craftsmanship. My work extends into upcycling
            discarded garments into functional accessories and facilitating sewing
            workshops to empower others with repair knowledge, reflecting my commitment to
            reducing textile waste and extending product life cycles. I thrive in
            fast-paced, hands-on environments, combining my technical sewing expertise and
            problem-solving mindset to reimagine and restore garments with care and
            precision.
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
            <Typography sx={{mt: 5}} variant="h2">Work</Typography>
            <br />
            <Typography variant="h3">Upcyling</Typography>
            <Grid container>
              {upcyclingProjects.map((project, i) => (
                <ImageLink key={i} project={project} />
              ))}
            </Grid>
            <Typography variant="h3">Repair</Typography>
            <Grid container>
              {repairProjects.map((project, i) => (
                <ImageLink key={i} project={project} />
              ))}
            </Grid>

            <Typography variant="h3">Community</Typography>
            <Grid container>
              {workshopProjects.map((project, i) => (
                <ImageLink key={i} project={project} />
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
    </>
  );
}

export default Home;
