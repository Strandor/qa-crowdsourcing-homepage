import * as actions from "./actions";
import { Action as ReduxAction, Reducer as ReduxReducer } from "redux";

export interface Action<T extends string, P> extends ReduxAction<T> {
	payload: P;
}

export type ExtractActionFromActionCreator<AC> = AC extends () => infer A
	? A
	: AC extends (payload: any) => infer A
	? A
	: AC extends (payload: any, error: any) => infer A
	? A
	: never;

export type AllActions = ExtractActionFromActionCreator<
	typeof actions[keyof typeof actions]
>;

export type Reducer<S = any> = (state: S | undefined, action: AllActions) => S;

export function createAction<T extends string>(type: T): Action<T, void>;
export function createAction<T extends string, P>(
	type: T,
	payload: P
): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
	return typeof payload === "undefined" ? { type } : { type, payload };
}
