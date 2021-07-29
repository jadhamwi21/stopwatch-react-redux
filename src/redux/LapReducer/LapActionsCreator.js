import LapActionsType from "./LapActionsType.js";
export const LapActionsCreator = {
	addLap: (Lap) => ({
		type: LapActionsType.ADD_LAP,
		payload: { targetLap: Lap },
	}),
	resetLaps: () => ({ type: LapActionsType.RESET_LAPS }),
};
export default LapActionsCreator;
