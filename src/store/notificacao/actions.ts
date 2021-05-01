import { LoadingIndicator } from '../../types/commom';
import { ResponseError } from '../../types/response';
import { Notificacao } from './types';

export enum NotificacaoActionTypes {
	SET_LOADING_INDICATOR = 'SET_LOADING_INDICATOR',
	GET_ALL_REQUEST = 'GET_ALL_REQUEST',
	GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',
	GET_ALL_FAILURE = 'GET_ALL_FAILURE',
}

export function setLoadingIndicator({ isLoading, activityText }: LoadingIndicator) {
	return {
		type: NotificacaoActionTypes.SET_LOADING_INDICATOR,
		payload: { isLoading, activityText },
	};
}

export function getAllRequest(oficioId: number) {
	return {
		type: NotificacaoActionTypes.GET_ALL_REQUEST,
		payload: oficioId,
	};
}

export function getAllSuccess(notificacoes: Notificacao[]) {
	return {
		type: NotificacaoActionTypes.GET_ALL_SUCCESS,
		payload: notificacoes,
	};
}

export function getAllFailure(error: ResponseError) {
	return {
		type: NotificacaoActionTypes.GET_ALL_FAILURE,
		payload: error,
	};
}
