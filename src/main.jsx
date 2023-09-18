import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TimeFrameProvider } from './contexts/TimeFrame.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimeFrameProvider>
      <App />
    </TimeFrameProvider>
  </React.StrictMode>
);
