import { Timer } from "../components/Timer/Timer.js";
import Styles from "./Styles.module.css";
import { connect } from "react-redux";
import { useTimer } from "../hooks/useTimer.js";
const TimerContainer = ({ Total, Running, Dispatcher, Reset }) => {
	useTimer(Running, Dispatcher, Reset);
	return (
		<div className={Styles.TimerContainer}>
			<Timer totalCentiSeconds={Total} />
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		Total: state.Timer.total,
		Running: state.Status.isRunning,
		Reset: state.Status.shouldReset,
	};
};
const mapDispatchToProps = (dispatch) => {
	return { Dispatcher: dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
