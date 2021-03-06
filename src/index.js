import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// context
import { AppContextProvider } from './context/AppContext'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);