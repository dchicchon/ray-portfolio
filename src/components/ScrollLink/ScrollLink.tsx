import { useState } from 'react';
import Typography from '@mui/material/Typography';

interface ScrollLinkProps {
  ref: React.RefObject<any>;
  section: string;
}

function ScrollLink(props: ScrollLinkProps) {
  const [hover, setHover] = useState(false);

  const handleScroll = () => {
    props.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Typography
      sx={
        hover
          ? {
              cursor: 'pointer',
              textDecoration: 'underline',
            }
          : {
              cursor: 'pointr',
            }
      }
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={handleScroll}
      variant="h4"
    >
      {props.section}
    </Typography>
  );
}

export default ScrollLink;
