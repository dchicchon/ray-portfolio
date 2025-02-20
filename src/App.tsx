import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Home from './pages/Home';
import Project from './pages/Project';
import './App.css';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'rgb(255,255,240)',
    },
  },
});

function App() {
  const [pathname] = useHashLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects/:projectId" component={Project} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
