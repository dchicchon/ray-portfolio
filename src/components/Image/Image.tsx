import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { SxProps } from '@mui/material';

interface ImageProps {
  image: string;
  name: string;
}

const sx: SxProps = {
  cursor: 'pointer',
  display: 'flex',
  height: 400,
  width: 300,
};

function Image(props: ImageProps) {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
      }}
      onClick={() => {
        console.log('check');
      }}
      size={{
        sm: 12,
        md: 6,
      }}
    >
      <Box sx={sx}>
        <img height="100%" width="100%" alt={props.name} src={props.image} />
      </Box>
    </Grid>
  );
}

export default Image;
