import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from 'sagas';
import { rootReducer } from 'reducers';
import { Home } from 'pages/home';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  </Provider>
);