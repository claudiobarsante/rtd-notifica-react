import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
	getAllFailure,
	getAllRequest,
	getAllSuccess,
	NotificacaoActionTypes,
	setLoadingIndicator,
} from './actions';
import { State } from '../configureStore';
import getAllNotificacoesService from './../../services/notificacaoService';

import { Notificacao } from './types';
import { format } from '../../utils/formatErrorMessage';

type getAllRequestType = ReturnType<typeof getAllRequest>;

function* getAll(action: getAllRequestType) {
	//
	const oficioId: number = yield select((state: State) => state.auth.currentUser.oficioId);

	try {
		yield put(setLoadingIndicator({ isLoading: true, activityText: 'Carregando notificações' }));
		const response: AxiosResponse = yield call(getAllNotificacoesService, oficioId);

		const notificacoes: Notificacao[] = JSON.parse(response.data);

		yield put(getAllSuccess(notificacoes));
	} catch (error) {
		const { code, message } = format(error.toString());
		yield put(getAllFailure({ code, message }));
	}
}

export default function* notificacoesSaga() {
	yield all([takeLatest(NotificacaoActionTypes.GET_ALL_REQUEST, getAll)]);
}
