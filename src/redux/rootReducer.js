import { LapReducer } from "./LapReducer/LapReducer.js";
import { StatusReducer } from "./StatusReducer/StatusReducer.js";
import { TimerReducer } from "./TimerReducer/TimerReducer.js";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	Timer: TimerReducer,
	Lap: LapReducer,
	Status: StatusReducer,
});
export default rootReducer;
