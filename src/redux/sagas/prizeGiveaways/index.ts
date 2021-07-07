import API from "src/api";
import * as Declerations from "src/declerations";
import { put, takeLatest, all, fork } from "redux-saga/effects";
import {
	fetchPrizeGiveawaysSuccess,
	PrizeGiveawaysActions,
} from "src/redux/actions";

function* onFetchPrizeGiveaways() {
	try {
		const { data } = yield API.get<Declerations.PrizeGiveaways.PrizeGiveaway[]>(
			"/api/v1/prize_give_aways"
		);

		yield put(fetchPrizeGiveawaysSuccess(data));
	} catch (error) {
		alert(error);
	}
}

export default function* prizeGiveaways() {
	yield all([
		yield takeLatest(
			PrizeGiveawaysActions.FETCH_PRIZE_GIVEAWAYS,
			onFetchPrizeGiveaways
		),
	]);
}
