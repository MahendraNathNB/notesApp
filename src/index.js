import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import { startGetNotes } from './actions/notesAction';
import { startGetCategory } from './actions/categoryAction';
import {startLoggedIn} from './actions/userAction'

const store = configureStore() 
store.dispatch(startGetCategory())
store.dispatch(startGetNotes())

if(localStorage.getItem('token')){
  store.dispatch(startLoggedIn(localStorage.getItem('token')))
}

const jsx = (
  <Provider store = {store}>
    <App/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'));


