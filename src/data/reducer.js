import initialState from './initial'

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

export default reducer;