import TimerActionsTypes from "./TimerActionsTypes.js";
const initialState = {
	total: 0,
};
export const TimerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TimerActionsTypes.INC_TIMER:
			return { total: state.total + 1 };
		case TimerActionsTypes.RESET_TIMER:
			return { total: 0 };
		default:
			return state;
	}
};
export default TimerReducer;
