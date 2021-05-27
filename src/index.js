// External imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Local imports
import { configureClient } from './api/client';
import storage from './utils/storage';
import App from './components/app';
import rootReducer from './reducers'

// Assets
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const accessToken = storage.get('auth');
configureClient({ accessToken });

render(
  <Provider store={store}>
    <Router>
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
