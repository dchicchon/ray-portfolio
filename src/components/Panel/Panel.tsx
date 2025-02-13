import Box from '@mui/material/Box';

interface PanelProps {
  ref: React.Ref<HTMLElement>;
  children: React.ReactNode;
}

function Panel(props: PanelProps) {
  return (
    <Box
      ref={props.ref}
      sx={{
        // border: '1px solid black',
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      {props.children}
    </Box>
  );
}

export default Panel;
