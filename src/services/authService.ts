import apiClient from '../api/client';
import { Credentials } from 'hooks/use-auth';

export const signInService = ({ email, password }: Credentials) =>
	apiClient({
		method: 'post',
		headers: { 'Content-Type': 'text/plain' },
		url: `${process.env.REACT_APP_TOKEN_ENDPOINT}`,
		data: `username=${email}&password=${password}&grant_type=password`,
	});

export default signInService;
