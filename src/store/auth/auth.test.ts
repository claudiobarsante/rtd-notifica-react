import { call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { runSaga } from 'redux-saga';
import { signIn } from './sagas';
import axios, { AxiosResponse } from 'axios';
import { signInRequest, setLoadingIndicator, signInFailure, signInSuccess } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';

import { Credentials } from './types';

import sigInService from '../../services/authService';

import authReducer from './reducer';

type signInRequestType = ReturnType<typeof signInRequest>;

//Todo: Testando com o jest */
//? O LOGIN COM  email: 'user@demo.com.br', password: 'Demo@2020' é
//? o usuário padrão para testes

describe('Testing Saga', () => {
	it('should call signInService and dispatch action', async () => {
		const user: Credentials = { email: 'user@demo.com.br', password: 'Demo@2020' };
		const dummyResponse = {
			currentUser: {
				apelido: 'Nickname',
				institucionalId: '171',
				oficioId: '171',
				userId: '12345',
				userName: 'testUser',
			},
			error: { code: 0, message: '' },
			expirationDate: new Date('2021-01-01'),
			isAuthenticated: true,
			loadingIndicator: { isLoading: false, activityText: '' },
			token: '1111111',
		};
		const mockedAxios = axios as jest.Mocked<typeof axios>;
		const requestSigIn = jest
			.spyOn(sigInService, user)
			.mockImplementation(() => Promise.resolve(dummyResponse));

		const dispatched = [];
		const result = await runSaga(
			{
				dispatch: action => dispatched.push(action),
			},
			signIn(user)
		);
	});
});

// describe('Testing signIn', () => {
// 	const sigInService = jest.fn();
// 	const mockAction = {
// 		type: UserActionTypes.SIGNIN_REQUEST,
// 		payload: { email: 'user@demo.com.br', password: 'Demo@2020' },
// 	};
// 	const it = sagaHelper(signIn(mockAction));

// 	it('should put setLoadingIndicator', result => {
// 		console.log('result ', result);
// 		expect(result).toEqual(
// 			put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
// 		);
// 		console.log('result => ', result);
// 	});
// 	it('should have called the mock signInService', result => {
// 		expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
// 	});
// });
