import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
// check the build type
import App from '../App';

const dev = import.meta.env.DEV;

export const Route = createRootRoute({
  component: () => (
    <>
      <App />
      {dev && <TanStackRouterDevtools />}
    </>
  ),
});
