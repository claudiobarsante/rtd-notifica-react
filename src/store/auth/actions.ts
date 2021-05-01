import { ResponseError } from '../../types/response';
import { AuthState, Credentials } from './types';
import { LoadingIndicator } from '../../types/commom';

export enum UserActionTypes {
	SET_LOADING_INDICATOR = 'SET_LOADING_INDICATOR',
	SIGNIN_REQUEST = 'SIGNIN_REQUEST',
	SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
	SIGNIN_FAILURE = 'SIGNIN_FAILURE',
	RESET_USER_STATE = 'RESET_USER_STATE',
}

export function setLoadingIndicator({ isLoading, activityText }: LoadingIndicator) {
	return {
		type: UserActionTypes.SET_LOADING_INDICATOR,
		payload: { isLoading, activityText },
	};
}
export function signInRequest({ email, password }: Credentials) {
	return {
		type: UserActionTypes.SIGNIN_REQUEST,
		payload: { email, password },
	};
}

export function signInSuccess(authState: AuthState) {
	return {
		type: UserActionTypes.SIGNIN_SUCCESS,
		payload: authState,
	};
}

export function signInFailure(error: ResponseError) {
	return {
		type: UserActionTypes.SIGNIN_FAILURE,
		payload: error,
	};
}
export function resetUserState() {
	return {
		type: UserActionTypes.RESET_USER_STATE,
	};
}
