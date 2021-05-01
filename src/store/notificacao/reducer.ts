import { Reducer } from 'redux';
import { NotificacoesState } from './types';
import { NotificacaoActionTypes } from './actions';

const INITIAL_STATE: NotificacoesState = {
	all: [],
	filteredNotificacoes: [],
	error: { code: 0, message: '' },
	loadingIndicator: {
		isLoading: false,
		activityText: '',
	},
	lastUpdate: new Date(),
};

const notificacoesReducer: Reducer<NotificacoesState> = (state = INITIAL_STATE, action) => {
	const { payload, type } = action;

	switch (type) {
		case NotificacaoActionTypes.SET_LOADING_INDICATOR:
			return {
				...state,
				loadingIndicator: {
					isLoading: payload.isLoading,
					activityText: payload.activityText,
				},
			};

		case NotificacaoActionTypes.GET_ALL_SUCCESS:
			return {
				...state,
				all: payload,
				filteredNotificacoes: payload,
				lastUpdate: new Date(),
			};
		case NotificacaoActionTypes.GET_ALL_FAILURE:
			console.log('error ', payload);
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
};

export default notificacoesReducer;
