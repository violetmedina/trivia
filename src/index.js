import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'


import './index.css';
import App from './App';
import Game from './components/Game'
import Categories from './components/Categories';

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import rootReducer from './reducers';

//Reducer.createStore()

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//reducer

ReactDOM.render(

  <Provider store={store}>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/game' element={<Game />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

