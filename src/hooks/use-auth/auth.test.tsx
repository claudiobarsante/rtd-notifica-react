import { renderHook, act } from '@testing-library/react-hooks';
import AxiosMock from 'axios-mock-adapter';
import { toast } from 'react-toastify';

import apiClient from 'api/client';
import { AuthProvider, useAuth } from '.';
import signInService from 'services/authService';
import axios from 'axios';

const apiMock = new AxiosMock(axios);

jest.mock('react-toastify');
const mockedToastError = toast.error as jest.Mock;

describe('useAuth hook', () => {
	beforeEach(() => {
		apiMock.reset();
	});

	it('should be able to call toast on error login', async () => {
		const email = 'user@dem.com.br';
		const password = 'Demo@2020';
		console.log('url ', process.env.REACT_APP_TOKEN_ENDPOINT);
		apiMock
			.onPost(`${process.env.REACT_APP_TOKEN_ENDPOINT}`, `username=${email}&password=${password}`, {
				'Content-Type': 'text/plain',
			})
			.reply(400);

		const { result, waitFor } = renderHook(useAuth, {
			wrapper: AuthProvider,
		});

		act(() => {
			result.current.tryToSignIn({ email: email, password: password });
		});

		await waitFor(() => {
			expect(mockedToastError).toHaveBeenCalledWith('erro2');
		});

		// await waitFor(() => {
		// 	expect(message).toEqual()
		// });//
	});
});
