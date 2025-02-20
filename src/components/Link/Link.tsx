import { Link as WouterLink } from 'wouter';
import { Link as MuiLink } from '@mui/material';

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
      component={WouterLink}
      to={props.to}
    >
      {props.children}
    </MuiLink>
  );
}
