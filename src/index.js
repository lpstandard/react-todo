import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/App';
import { createStore } from 'redux';
import todoApp from './reducer';
let store = createStore(todoApp);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
