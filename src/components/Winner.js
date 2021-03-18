const Winner = ({ winner }) => (
winner !== 0 ? <h2 className="alert alert-success">Player { winner } Wins!</h2> : null 
) 

export default Winner; 