import { createFileRoute } from '@tanstack/react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useMediaQuery } from '@mui/material';

import Image from '../../components/Image';
import { projects } from '../../utils/data';
import Link from '../../components/Link';

export const Route = createFileRoute('/project/$projectId')({
  component: Project,
});

function Project() {
  const desktop = useMediaQuery('(min-width:600px)');
  const { projectId } = Route.useParams();
  const project = projects[parseInt(projectId)];

  if (desktop) {
    return (
      <Grid
        container
        sx={{
          display: 'flex',
          height: '100vh',
          padding: 5,
        }}
      >
        <Grid
          size={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              pr: 5,
            }}
          >
            <Typography variant="h5">{project?.name}</Typography>
            <Typography variant="h6">{project?.description}</Typography>
          </Box>

          <Link to="/">
            <Typography variant="h6">Back to Home Page</Typography>
          </Link>
        </Grid>
        <Grid
          size={5}
          sx={{
            // width: '100%',
            height: '100%',
          }}
        >
          <Paper
            elevation={7}
            sx={{ height: '100%' }}
          >
            <Image image={project!.image} name={project!.name} />
          </Paper>
        </Grid>
      </Grid>
    );
  }

  // MOBILE
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        height: '100vh',
        padding: 5,
      }}
    >
      <Grid
        size={12}
        sx={{
          pb: 5,
          mb: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '1px solid black',
        }}
      >
        <Box>
          <Typography variant="h5">{project?.name}</Typography>
          <Typography sx={{ my: 2 }} variant="h6">
            {project?.description}
          </Typography>
        </Box>

        <Link to="/">
          <Typography variant="h6">Back to Home Page</Typography>
        </Link>
      </Grid>

      {/* for each image in project show it */}
      <Grid
        size={12}
        sx={{
          width: '100%',
          // height: '100%',
        }}
      >
        <Image image={project!.image} name={project!.name} />
      </Grid>
    </Grid>
  );
}
