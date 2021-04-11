import './App.css';
import Reset from './components/Reset';
import Winner from './components/Winner';
import Player1 from './components/Player/Player1';
import Player2 from './components/Player/Player2';


const App = ({handleIncrementPlayer1, handleIncrementPlayer2, handleReset, serving, winner}) => (
    
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>Table Tennis Flip 🏓</h1>
      </header>
      
      {/* scores */}
      <div className="row mb-4">
      <Player1
        handleIncrement={ handleIncrementPlayer1 }
        player = { 1 }
        />
        
      <Player2
        handleIncrement={ handleIncrementPlayer2 }
        player = { 2 }
        />
        </div>
          
      { /* winner message */}
    <Winner /> 
      
      { /* reset button */}
    <Reset />
  </>
);
export default App;