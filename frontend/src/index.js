import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import { AuthContextProvider , AuthContextProvider2  } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider2>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AuthContextProvider2>
  </React.StrictMode>
);

