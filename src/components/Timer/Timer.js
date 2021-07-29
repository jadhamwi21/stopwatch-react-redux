import Styles from "./Timer.module.css";
import { formatCentisecondsToTimeFormat_Minutes_Seconds_Centiseconds } from "../../globalFunctions.js";
export const Timer = ({ totalCentiSeconds }) => {
	const {
		Minutes,
		Seconds,
		Centiseconds,
	} = formatCentisecondsToTimeFormat_Minutes_Seconds_Centiseconds(
		totalCentiSeconds
	);
	return (
		<div className={Styles.Wrapper}>
			<div className={Styles.Slot}>{Minutes}</div>
			<div className={Styles.Seperator}>{":"}</div>
			<div className={Styles.Slot}>{Seconds}</div>
			<div className={Styles.Seperator}>{":"}</div>
			<div className={Styles.Slot}>{Centiseconds}</div>
		</div>
	);
};

export default Timer;
