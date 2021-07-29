import StatusActionsType from "./StatusActionsType.js";
export const StatusActionsCreator = {
	start: () => ({ type: StatusActionsType.START }),
	stop: () => ({ type: StatusActionsType.STOP }),
	reset: () => ({ type: StatusActionsType.RESET }),
};
export default StatusActionsCreator;
