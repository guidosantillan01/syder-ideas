import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bulma/css/bulma.css';

import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();
