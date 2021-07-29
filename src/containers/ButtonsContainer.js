import React from "react";
import { Button } from "../components/Button/Button.js";
import { connect } from "react-redux";
import Styles from "./Styles.module.css";
import { StatusActionsCreator } from "../redux/StatusReducer/StatusActionsCreator.js";
import { LapActionsCreator } from "../redux/LapReducer/LapActionsCreator.js";
const ButtonsContainer = ({ ManipulatorDispatcher, Total, Running }) => {
	const ButtonsHandlers = {
		Start_Button: () => ManipulatorDispatcher(StatusActionsCreator.start()),
		Stop_Button: () => ManipulatorDispatcher(StatusActionsCreator.stop()),
		Reset_Button: () => {
			ManipulatorDispatcher(StatusActionsCreator.reset());
			ManipulatorDispatcher(LapActionsCreator.resetLaps());
		},
		Lap_Button: () => ManipulatorDispatcher(LapActionsCreator.addLap(Total)),
	};

	return (
		<div className={Styles.ButtonsContainer}>
			<Button
				InnerContent={"Start"}
				onClickHandler={ButtonsHandlers.Start_Button}
				shouldDisable={Running ? true : false}
			/>
			<Button
				InnerContent={"Stop"}
				onClickHandler={ButtonsHandlers.Stop_Button}
			/>
			<Button
				InnerContent={"Lap"}
				onClickHandler={ButtonsHandlers.Lap_Button}
				shouldDisable={Running ? false : true}
			/>
			<Button
				InnerContent={"Reset"}
				onClickHandler={ButtonsHandlers.Reset_Button}
			/>
		</div>
	);
};
const mapStateToProps = (state) => ({
	Total: state.Timer.total,
	Running: state.Status.isRunning,
});
const mapDispatchToProps = (dispatch) => ({
	ManipulatorDispatcher: dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
