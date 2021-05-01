import apiClient from '../api/client';
import { Credentials } from '../store/auth/types';

const sigInService = ({ email, password }: Credentials) =>
	apiClient({
		method: 'post',
		headers: { 'Content-Type': 'text/plain' },
		url: `${process.env.REACT_APP_TOKEN_ENDPOINT}`,
		data: `username=${email}&password=${password}&grant_type=password`,
	});

export default sigInService;
