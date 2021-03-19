import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = state => {
    return {
        serving: state.serving,
        score: state.player1
    };
};

export default connect(mapStateToProps)(ScoreCard);