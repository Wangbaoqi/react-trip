import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style/index.scss';

import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { store } from './app/store';

import reportWebVitals from './reportWebVitals';

import '@/mocks';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={'loading'}>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
