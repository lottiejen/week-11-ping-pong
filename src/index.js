import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

// initial state 
const initial = {
  player1: 0,
  player2: 0,
};

// REDUCER 

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
  const reducer = (state, action) => {

  // depending on what the action's type property is
  // we can do different things
  switch (action.type) {

  // using object spread to create a new object
  // with the same properties
  case "INCREMENT": return { ...state, value: state.value + 1 };
  default: return state;
  }
};

// store 

const store = createStore(reducer, initial);

  // we update subscribe to call the ReactDOM.render
// method whenever the state changes
  const render = () => {
    let state = store.getState();
  // pass in state.value as a value prop
    ReactDOM.render(
      <App />,
      document.getElementById("root")
    );
  };
  store.subscribe(render); // render when state changes
  render(); // render when page loads using initial state




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
