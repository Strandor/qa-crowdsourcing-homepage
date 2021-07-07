import * as Declerations from "src/declerations";
import { createAction } from "src/redux";
import { PrizeGiveawaysActions } from "./utils";

export const fetchPrizeGiveaways = () =>
	createAction(PrizeGiveawaysActions.FETCH_PRIZE_GIVEAWAYS);

export const fetchPrizeGiveawaysSuccess = (
	payload: Declerations.PrizeGiveaways.PrizeGiveaway[]
) => createAction(PrizeGiveawaysActions.FETCH_PRIZE_GIVEAWAYS_SUCCESS, payload);

export * from "./utils";
