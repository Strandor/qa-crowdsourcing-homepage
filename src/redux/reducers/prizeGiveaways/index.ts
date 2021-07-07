import { Reducer } from "src/redux";
import { PrizeGiveawaysActions } from "../../actions";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case PrizeGiveawaysActions.FETCH_PRIZE_GIVEAWAYS:
			return {
				...state,
				isLoading: true,
			};
		case PrizeGiveawaysActions.FETCH_PRIZE_GIVEAWAYS_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
