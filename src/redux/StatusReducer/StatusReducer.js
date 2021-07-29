import StatusActionsType from "./StatusActionsType.js";
const initialState = {
	isRunning: false,
	shouldReset: false,
};
export const StatusReducer = (state = initialState, action) => {
	switch (action.type) {
		case StatusActionsType.START:
			return { shouldReset: false, isRunning: true };
		case StatusActionsType.STOP:
			return { shouldReset: false, isRunning: false };
		case StatusActionsType.RESET:
			return { shouldReset: true, isRunning: false };
		default:
			return state;
	}
};
