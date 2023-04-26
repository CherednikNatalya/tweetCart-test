import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/tweetsCart-test" >
    <App />
    <GlobalStyle />
    </BrowserRouter>
// </React.StrictMode>
);



