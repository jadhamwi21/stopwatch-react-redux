import LapActionsType from "./LapActionsType.js";
const initialState = {
	LapsList: [],
};
export const LapReducer = (state = initialState, action) => {
	switch (action.type) {
		case LapActionsType.ADD_LAP:
			return { LapsList: [...state.LapsList, action.payload.targetLap] };
		case LapActionsType.RESET_LAPS:
			return { LapsList: [] };
		default:
			return state;
	}
};
