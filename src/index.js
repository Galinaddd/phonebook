import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from '';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
