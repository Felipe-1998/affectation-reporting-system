import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import store from './redux/Store/store';
import axios from 'axios';
// axios.defaults.baseURL="http://localhost:3000";
axios.defaults.baseURL="https://firebase-api-ja2l.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
)
