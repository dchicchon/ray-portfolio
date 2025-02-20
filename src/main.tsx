import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Import the generated route tree

import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
