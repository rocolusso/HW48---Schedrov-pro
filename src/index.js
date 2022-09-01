import React from 'react';
import ReactDOM from 'react-dom/client';
import Progress from './Progress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Progress percentage={40} />
  </React.StrictMode>,
);
