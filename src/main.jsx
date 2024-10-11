import React from 'react';
import ReactDOM from 'react-dom/client'; // Vite uses React 18's new API
import { Provider } from 'react-redux';
import store from './redux/store'; 
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
);


