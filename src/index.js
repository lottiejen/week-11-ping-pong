import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/store'



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
