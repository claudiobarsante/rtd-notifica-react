import { Reducer } from 'redux';
import { AuthState } from './types';
import { UserActionTypes } from './actions';

const INITIAL_STATE: AuthState = {
	currentUser: {
		apelido: '',
		institucionalId: 0,
		oficioId: 0,
		userId: '',
		userName: '',
	},
	error: { code: 0, message: '' },
	expirationDate: undefined,
	isAuthenticated: false,
	loadingIndicator: {
		isLoading: false,
		activityText: '',
	},
	token: '',
};

const authReducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
	const { payload, type } = action;

	switch (type) {
		case UserActionTypes.SET_LOADING_INDICATOR:
			return {
				...state,
				loadingIndicator: {
					isLoading: payload.isLoading,
					activityText: payload.activityText,
				},
			};
		case UserActionTypes.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: payload.currentUser,
				error: payload.error,
				expirationDate: payload.expirationDate,
				isAuthenticated: payload.isAuthenticated,
				token: payload.token,
			};
		case UserActionTypes.SIGNIN_FAILURE:
			const { code, message } = payload;
			return {
				...state,
				error: { code, message },
				expirationDate: undefined,
				isAuthenticated: false,
				token: '',
			};
		case UserActionTypes.RESET_USER_STATE:
			return {
				...state,
				currentUser: {
					apelido: '',
					institucionalId: 0,
					oficioId: 0,
					userId: '',
					userName: '',
				},
				error: { code: 0, message: '' },
				expirationDate: undefined,
				isAuthenticated: false,
				loadingIndicator: {
					isLoading: false,
					activityText: '',
				},
				token: '',
			};
		default:
			return state;
	}
};

export default authReducer;
