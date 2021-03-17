import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const initialState = {
  player1: 0,
  player2: 0,
  serving: 1, 
  winner: 0,  
};

const server = (state) => {
  let total = state.player1 + state.player2
  return {
    ...state,
    serving: Math.floor(total / 5) % 2 === 0 ? 1 : 2 // math.floor rounds number down  
  }
}

const incrementPlayer1 = (state) => { // accepts state object
  return {
  ...state, // copying the state object, accessing property within 
  player1: state.player1 + 1 // access the property (player1), state.player1 + 1 allows you to increment. 
  }
}

const incrementPlayer2 = (state) => {
  return {
  ...state, 
  player2: state.player2 + 1
  }
}

const isThereAWinner = (state) => {
  return state.player1 >= 21 || state.player2 >= 21 // isThereAWinner returns true or false 
}

const whoWins = (state)  => {
  return {
    ...state, 
    winner: isThereAWinner(state) ? (state.player1 > state.player2 ? 1 : 2) : 0 // if a winner, compares the player scores in brackets // if false, will set winner property to 0. 
  }
}


const reducer = (state, action) => {
  switch (action.type){
    case "INCREMENTPLAYER1" : return whoWins(server(incrementPlayer1(state)))
    case "INCREMENTPLAYER2" : return whoWins(server(incrementPlayer2(state)))
    case "RESET" : return initialState ; 
    default: return state;
  }
};

// store 
const store = createStore(
  reducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  let state = store.getState();
ReactDOM.render(
  <React.StrictMode>
        {/* we update subscribe to call the ReactDOM.render
        method whenever the state changes */}
        <App 
        player1 = { state.player1 }
        handleIncrementPlayer1={ () => store.dispatch({ type: "INCREMENTPLAYER1" })} 
        player2 = {state.player2} 
        handleIncrementPlayer2={ () => store.dispatch({ type: "INCREMENTPLAYER2" })}
        handleReset={ () => store.dispatch({ type: "RESET" })}
        serving = { state.serving }
        winner = { state.winner }
        />
  </React.StrictMode>,
  document.getElementById('root')
  );
};

store.subscribe(render); /* render when state changes */


render(); /*render when page loads using initial state */
/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
// dispatch, dispatches an action
// createStore is the Redux part of it all
