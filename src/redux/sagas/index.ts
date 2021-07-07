import { fork, all } from "redux-saga/effects";
import prizeGiveaways from "./prizeGiveaways";

export default function* rootSaga() {
	yield all([yield fork(prizeGiveaways)]);
}
