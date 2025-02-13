import Box from '@mui/material/Box';

interface PanelProps {
  ref: React.Ref<HTMLElement>;
  children: React.ReactNode;
}

function Panel(props: PanelProps) {
  return (
    <Box
      ref={props.ref}
      style={{
        height: '100vh',
      }}
    >
      {props.children}
    </Box>
  );
}

export default Panel;
