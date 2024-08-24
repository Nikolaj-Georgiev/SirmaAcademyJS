import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@material-tailwind/react';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
