import apiClient from 'api/client';
import { Credentials } from 'hooks/useAuth';

const signInService = ({ email, password }: Credentials) =>
  apiClient({
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    url: `${process.env.REACT_APP_TOKEN_ENDPOINT}`,
    data: `username=${email}&password=${password}&grant_type=password`
  });

//todo:check if it's a good way for testing
// apiClient.post(
// 	`${process.env.REACT_APP_TOKEN_ENDPOINT}`,
// 	`username=${email}&password=${password}&grant_type=password`,
// 	{
// 		headers: { 'Content-Type': 'text/plain' },
// 	}
// );

export default signInService;
