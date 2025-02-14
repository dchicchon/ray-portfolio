import { Link as RouterLink } from '@tanstack/react-router';
import { Link as MuiLink } from '@mui/material';

// import styles from './Link.module.css';

interface LinkProps {
  color?: string;
  children: React.ReactNode;
  to: string;
}

export default function Link(props: LinkProps) {
  return (
    <MuiLink
      //   className={styles.link}
      color={props.color || 'primary'}
      component={RouterLink}
      to={props.to}
    >
      {props.children}
    </MuiLink>
  );
}
