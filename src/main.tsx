import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { createRoot } from 'react-dom/client'
import i18n from './i18n';
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </I18nextProvider>
);
