import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Categories from './components/Categories';

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import rootReducer from './reducers';

//Reducer.createStore()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger)))//reducer

ReactDOM.render(

  <Provider store={store}>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/categories' element={<Categories />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

