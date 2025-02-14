import { createFileRoute } from '@tanstack/react-router';
import Typography from '@mui/material/Typography';
import Image from '../../components/Image';
import Grid from '@mui/material/Grid2';

import { projects } from '../../utils/data';

export const Route = createFileRoute('/project/$projectId')({
  component: Project,
});

function Project() {
  const { projectId } = Route.useParams();
  const project = projects.find((project) => project.name === projectId);

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
        size={6}
        sx={{
          borderRight: '1px solid black',
        }}
      >
        <Typography variant="h5">{project?.name}</Typography>
        <Typography variant="h6">{project?.description}</Typography>
      </Grid>
      <Grid
        size={6}
        sx={{
          // width: '100%',
          height: '100%',
        }}
      >
        <Image image={project!.image} name={project!.name} />
      </Grid>
    </Grid>
  );
}
