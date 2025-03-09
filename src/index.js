import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}
