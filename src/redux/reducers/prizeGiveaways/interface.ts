import * as Declerations from "src/declerations";

export interface State {
	isLoading: boolean;
	data: Declerations.PrizeGiveaways.PrizeGiveaway[];
	error?: Declerations.App.GenericError;
}
