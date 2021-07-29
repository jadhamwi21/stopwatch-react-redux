import { useEffect, useState } from "react";
import { TimerActionsCreator } from "../redux/TimerReducer/TimerActionsCreator.js";
export const useTimer = (Running, Dispatcher, Reset) => {
	const IncrementTime = () => {
		Dispatcher(TimerActionsCreator.incrementTimer());
	};
	// Initially there is no Callback, so the initialState will be undefined
	const [IntervalClearID, setIntervalClearID] = useState(undefined);
	useEffect(() => {
		if (Running === false) {
			if (IntervalClearID !== undefined) {
				clearInterval(IntervalClearID);
				if (Reset === true) {
					Dispatcher(TimerActionsCreator.resetTimer());
				}
			}
			return;
		}
		const clearInterval_ID = setInterval(IncrementTime, 10);
		setIntervalClearID(clearInterval_ID);
	}, [Running, Reset]);
};
export default useTimer;
