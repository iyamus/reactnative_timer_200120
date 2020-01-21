import { connect } from "react-redux";
import Timer from "./presenter";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";


// mapStateToProps: reducer에서 값을 전달 받아, presenter에 전달하는 역할을 한다.
function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timeDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

// mapDispatchToProps: presenter에서 수행한 함수를 reducer에 전달하는 역할을 한다. 
//dispatch는 object를 reducer로 보내는 함수이다.
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
        restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);