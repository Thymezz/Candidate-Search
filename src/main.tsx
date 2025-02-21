import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Simplified main entry point using BrowserRouter
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
