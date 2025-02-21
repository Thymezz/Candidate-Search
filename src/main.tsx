import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("Main file loaded successfully");

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
