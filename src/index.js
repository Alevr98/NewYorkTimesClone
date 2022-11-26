import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/index.css'
import { Provider } from 'react-redux'; 
import  store  from './redux/sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
