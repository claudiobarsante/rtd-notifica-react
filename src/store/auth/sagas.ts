import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toastr } from 'react-redux-toastr';
//Actions
import { signInRequest, signInSuccess, signInFailure, setLoadingIndicator } from './actions';
import { UserActionTypes } from './actions';
//ApiClient
import apiClient from './../../api/client';
//Services
import sigInService from '../../services/authService';
//Types
import { ResponseCode } from '../../types/response';
//Utils
import { format } from '../../utils/formatErrorMessage';

type signInRequestType = ReturnType<typeof signInRequest>;

export function* signIn(action: signInRequestType) {
	//
	try {
		put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }));
		const response: AxiosResponse = yield call(sigInService, action.payload);

		if (response.status === ResponseCode.OK) {
			//
			const { access_token, claims, expires_in, userName } = response.data;

			apiClient.defaults.headers.Authorization = `Bearer ${access_token}`;

			const userClaims = JSON.parse(claims);
			const expirationDate = new Date(
				new Date().getTime() + parseInt(expires_in) * 1000 //Multiplica por 1000 p converter im miliseconds
			);

			yield put(
				signInSuccess({
					currentUser: {
						apelido: userClaims[0].value,
						institucionalId: Number(userClaims[1].value),
						oficioId: Number(userClaims[2].value),
						userId: userClaims[3].value,
						userName,
					},
					error: { code: 0, message: '' },
					expirationDate,
					isAuthenticated: true,
					loadingIndicator: { isLoading: false, activityText: '' },
					token: access_token,
				})
			);
		}
	} catch (error) {
		const { code, message } = format(error.toString());
		toastr.error('Login', message);
		yield put(signInFailure({ code, message }));
	}

	yield put(setLoadingIndicator({ isLoading: false, activityText: 'acabou o request' }));
}

export function setHeadersAuthorization(action: any) {
	if (!action.payload) return;

	const { token } = action.payload.auth;

	if (token) {
		apiClient.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export default function* authSaga() {
	yield all([
		takeLatest('persist/REHYDRATE', setHeadersAuthorization),
		takeLatest(UserActionTypes.SIGNIN_REQUEST, signIn),
	]);
}
