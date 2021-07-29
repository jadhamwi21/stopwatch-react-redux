import { formatCentisecondsToTimeFormat_Minutes_Seconds_Centiseconds } from "../../globalFunctions.js";
import Styles from "./Lap.module.css";
const Lap = ({ individualLap }) => {
	const {
		Minutes,
		Seconds,
		Centiseconds,
	} = formatCentisecondsToTimeFormat_Minutes_Seconds_Centiseconds(
		individualLap
	);

	const TimeFormatObjectToString =
		Minutes.toString() +
		":" +
		Seconds.toString() +
		":" +
		Centiseconds.toString();
	return (
		<div className={Styles.LapWrapper}>
			<section className={Styles.LapContent}>
				{TimeFormatObjectToString}
			</section>
		</div>
	);
};

export default Lap;
