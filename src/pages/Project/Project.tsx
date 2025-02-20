import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import { useMediaQuery } from '@mui/material';

import { projects } from '../../utils/data';
import Link from '../../components/Link';
import { useParams } from 'wouter';
import Image from '../../components/Image';

function Project() {
  const desktop = useMediaQuery('(min-width:600px)');
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        height: '100vh',
        p: 2,
      }}
    >
      <Grid
        size={desktop ? 6 : 12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          pb: 5,
        }}
      >
        <Box
          sx={{
            pr: desktop ? 2 : 0,
          }}
        >
          <Typography variant="h5">{project?.name}</Typography>
          <Typography variant="h6">
            <pre
              style={{
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                textWrap: 'wrap',
              }}
            >
              {project?.description}
            </pre>
          </Typography>
        </Box>

        <Link to="/">
          <Typography variant="h6">Back to Home Page</Typography>
        </Link>
      </Grid>
      <Grid
        size={desktop ? 6 : 12}
        sx={{
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
          }}
        >
          <Grid gap={1} container>
            {project?.images.map((image, i) => (
              <Grid
                sx={{
                  minHeight: '30rem',
                }}
                key={i}
                size={desktop ? 5 : 12}
                flexGrow={1}
              >
                <Image image={image} name={'image'} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Project;
