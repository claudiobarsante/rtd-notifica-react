import sagaHelper from 'redux-saga-testing';
import { runSaga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import authSaga, { signIn } from './sagas';
import * as matchers from 'redux-saga-test-plan/matchers';

import { signInRequest, setLoadingIndicator, signInFailure, signInSuccess } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';
import { expectSaga } from 'redux-saga-test-plan';
import { Credentials } from './types';
import { throwError } from 'redux-saga-test-plan/providers';
import sigInService from '../../services/authService';

import authReducer from './reducer';
const mockAction = {
	type: UserActionTypes.SIGNIN_REQUEST,
	payload: { email: '123@gmail.com', password: '123' },
};

type signInRequestType = ReturnType<typeof signInRequest>;

// test('call api', async () => {
// 	//dispatched actions
// 	const dispatchedActions: any[] = [];

// 	const fakeStore ={
// 		getState:() => ({
// 			isLoading: true,
// 			activityText: 'carregando request',
// 		}),
// 		dispatch:(action: any) => dispatchedActions.push(action)

// 	}

// 	await runSaga(fakeStore,signIn({ email: '123@gmail.com', password: '123' }:any)).done;
// 	console.log('===', dispatchedActions)
// });
// describe('aur', () => {
// 	it('sdfdf', async () => {
// 		const dispatched:any = [];

// 		const saga = runSaga(
// 			{
// 				dispatch: (action:any) => dispatched.push(action),
// 			},
// 			setLoadingIndicator({ isLoading: true, activityText: 'carregando request' });
// 		  );
// 		  await saga.toPromise();

// 	})

// })
/*Testando com o redux-saga-testing */

// describe('Testing signIn', () => {
// 	const sigInService = jest.fn();
// 	const mockAction = {
// 		type: UserActionTypes.SIGNIN_REQUEST,
// 		payload: { email: '123@gmail.com', password: '123' },
// 	};
// 	const it = sagaHelper(signIn({ email: '123@gmail.com', password: '123' }));

// 	it('should put setLoadingIndicator', result => {
// 		console.log('result ', result);
// 		expect(result).toEqual(
// 			put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
// 		);
// 		console.log('result => ', result);
// 	});
// 	it('should have called the mock signInService first', result => {
// 		expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
// 	});
// });

/*
/*testando com redux-saga-test-plan */
it('setLoadingIndicator', () => {
	return (
		expectSaga(signIn, mockAction)
			.put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
			// .dispatch({
			// 	type: UserActionTypes.SIGNIN_REQUEST,
			// 	payload: { email: 'user@demo.com.br', password: 'Demo@2020' },
			// })

			.silentRun()
	);
});

it('Reducer state with loanding indicator =true', () => {
	const stateLoading = {
		currentUser: {
			apelido: '',
			institucionalId: 0,
			oficioId: 0,
			userId: '',
			userName: '',
		},
		error: { code: 0, message: ' ' },
		expirationDate: undefined,
		isAuthenticated: false,
		loadingIndicator: {
			isLoading: true,
			activityText: 'carregando request',
		},
		token: '',
	};
	return expectSaga(signIn, mockAction)
		.put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		.withReducer(authReducer)
		.hasFinalState(stateLoading)
		.silentRun();
});

// it('Reducer state with loanding indicator =true', () => {
// 	return expectSaga(signIn, mockAction)
// 		.withReducer(authReducer)
// 		.hasFinalState(stateLoading)
// 		.silentRun();
// });

// it('Api', () => {
// 	return expectSaga(signIn, mockAction)
// 		.provide([[matchers.call.fn(sigInService), { email: '123@gmail.com', password: '123' }]])
// 		.dispatch(signInFailure({ code: 400, message: 'Usuário ou senha inválidos !' }))
// 		.silentRun();
// });
//const error = {
//	code: 400,
//	message: 'Usuário ou senha inválidos !',
//};
//
const state = {
	currentUser: {
		apelido: '',
		institucionalId: 0,
		oficioId: 0,
		userId: '',
		userName: '',
	},
	error: { code: 400, message: 'Usuário ou senha inválidos !' },
	expirationDate: undefined,
	isAuthenticated: false,
	loadingIndicator: {
		isLoading: false,
		activityText: '',
	},
	token: '',
};
//
//// it('signInFailure with error 400', () => {
//// 	return (
//// 		expectSaga(signIn, mockAction)
//// 			//.provide([[call(sigInService, { email: '12@gmail.com', password: '123' }), error]])
//// 			.dispatch(signInFailure(error))
//// 			.silentRun()
//// 	);
//// });
//
//// it('Reducer state with error 400', () => {
//// 	return expectSaga(signIn, mockAction).withReducer(authReducer).hasFinalState(state).silentRun();
//// });
//
// const responseOk = {
// 	currentUser: {
// 		apelido: 'fake-nickname',
// 		institucionalId: 99,
// 		oficioId: 99,
// 		userId: 'fake-user-id',
// 		userName: 'fake-user-name',
// 	},
// 	error: { code: 0, message: '' },
// 	expirationDate: new Date(),
// 	isAuthenticated: true,
// 	loadingIndicator: { isLoading: false, activityText: '' },
// 	token: 'fake-access-token',
// };
// it('SignIn success', () => {
// 	return expectSaga(authSaga)
// 		.provide([
// 			[call(sigInService, { email: 'user@demo.com.br', password: 'Demo@2020' }), responseOk],
// 		])
// 		.put({ type: UserActionTypes.SIGNIN_SUCCESS, payload: responseOk })
// 		.dispatch({
// 			type: UserActionTypes.SIGNIN_REQUEST,
// 			payload: { email: 'user@demo.com.br', password: 'Demo@2020' },
// 		})

// 		.silentRun();
// });
//
// it('SignIn success', () => {
// 	return expectSaga(signIn, mockAction)
// 		.provide([
// 			[call(sigInService, { email: 'user@demo.com.br', password: 'Demo@2020' }), responseOk],
// 		])
// 		.dispatch({ type: UserActionTypes.SIGNIN_SUCCESS, payload: responseOk })

// 		.silentRun();
// });

// it('Reducer state with sign-in-success', () => {
// 	return (
// 		expectSaga(signIn, mockAction)
// 			.withReducer(authReducer)
// 			// .provide([
// 			// 	[call(sigInService, { email: 'user@demo.com.br', password: 'Demo@2020' }), responseOk],
// 			// ])
// 			//.dispatch(signInSuccess(responseOk))

// 			.hasFinalState(responseOk)
// 			.silentRun()
// 	);
// });
//
//// it('setLoadingIndicator-false', () => {
//// 	return expectSaga(signIn, mockAction)
//// 		.put(setLoadingIndicator({ isLoading: false, activityText: 'acabou o request' }))
//// 		.silentRun();
//// });
//
// describe('Tests', () => {
// 	it('fetchs post failure', () => {
// 		const error = new Error('Whoops');
// 		return expectSaga(signIn, mockAction)
// 			.provide([
// 				[
// 					call(sigInService, { email: 'user@demo.com.br', password: 'Demo@2020' }),
// 					throwError(error),
// 				],
// 			])
// 			.put(signInFailure({ code: 400, message: 'Usuário ou senha inválidos !' }))
// 			.silentRun();
// 	});

// 	it('Reducer state with error 400', () => {
// 		return expectSaga(signIn, mockAction).withReducer(authReducer).hasFinalState(state).silentRun();
// 	});*/
// });
