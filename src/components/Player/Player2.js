import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = state => {
    return {
        serving: state.serving,
        score: state.player2
    };
};

export default connect(mapStateToProps)(ScoreCard)