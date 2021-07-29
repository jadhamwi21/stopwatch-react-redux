import TimerActionsTypes from "./TimerActionsTypes.js";
export const TimerActionsCreator = {
	incrementTimer: () => ({
		type: TimerActionsTypes.INC_TIMER,
	}),
	resetTimer: () => ({ type: TimerActionsTypes.RESET_TIMER }),
};
export default TimerActionsCreator;
