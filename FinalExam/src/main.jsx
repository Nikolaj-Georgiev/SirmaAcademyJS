import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { DataProvider } from './context/DataContext.jsx';

import './sass/main.scss';

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
