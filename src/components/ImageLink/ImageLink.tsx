import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Link } from '@tanstack/react-router';

import { SxProps } from '@mui/material';
import Image from '../Image/Image';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ImageLinkProps {
  image: string;
  name: string;
  description: string;
  id: number;
}

function ImageLink(props: ImageLinkProps) {
  const matches = useMediaQuery('(min-width:600px)');
  const sx: SxProps = {
    cursor: 'pointer',
    display: 'flex',
    width: matches ? '75%' : '100%',
    //   height: '100%',
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        width: '100%',
      }}
      size={{
        sm: 6,
        md: 6,
      }}
    >
      <Box sx={sx}>
        <Link
          style={{
            width: '100%',
            // height: '100%',
          }}
          to="/project/$projectId"
          params={{
            // @ts-expect-error expecting string instead of id but lets fix this later
            projectId: props.id,
          }}
        >
          <Image image={props.image} name={props.name} />
        </Link>
      </Box>
    </Grid>
  );
}

export default ImageLink;
