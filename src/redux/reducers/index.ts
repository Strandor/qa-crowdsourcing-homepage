import { combineReducers } from "redux";
import prizeGiveaways from "./prizeGiveaways";

const rootReducer = combineReducers({
	prizeGiveaways,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
