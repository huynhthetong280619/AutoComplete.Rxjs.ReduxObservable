import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './fetch-characters-epic';

import reducer from './reducer';

import FetchCharacters from './FetchCharacters';
import Characters from './Characters';

import './styles.scss';
import thunk from 'redux-thunk';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, epicMiddleware));

const store = createStore(reducer, enhancer);

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>Star War Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
