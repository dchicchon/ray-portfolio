import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Link from '../Link';
import { SxProps } from '@mui/material';
import Image from '../Image/Image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ProjectType } from '../../utils/data';

interface ImageLinkProps {
  project: ProjectType;
}

function ImageLink(props: ImageLinkProps) {
  const [hover, setHover] = useState(false);
  const desktop = useMediaQuery('(min-width:600px)');
  const sx: SxProps = {
    cursor: 'pointer',
    display: 'flex',
    // height: desktop ? '75%' : '100%',
    width: desktop ? '75%' : '100%',
  };

  return (
    <Grid
      sx={{
        mb: 5,
        display: 'flex',
        justifyContent: 'center',
        p: desktop ? 8 : 0,
        width: '100%',
      }}
      size={{
        sm: 6,
        md: 6,
      }}
    >
      <Paper
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        elevation={hover ? 24 : 12}
        sx={sx}
      >
        <Link to={`/projects/${props.project.id}`}>
          <Image image={props.project!.images[0]} name={props.project.name} />
        </Link>
      </Paper>
    </Grid>
  );
}

export default ImageLink;
