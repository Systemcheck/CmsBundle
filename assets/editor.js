import { Typography, Container, Box } from '@material-ui/core';
import Editor from './CmsEditor/Editor';

import React from 'react';
import ReactDOM from 'react-dom';
import './CmsEditor/index.css';
import App from './CmsEditor/App';
import reportWebVitals from './CmsEditor/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('editor')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();