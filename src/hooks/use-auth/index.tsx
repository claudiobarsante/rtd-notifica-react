import { CurrentUser } from 'models/User';
import { createContext, useContext, useState, useCallback } from 'react';
import { LoadingIndicator } from 'types/commom';
import { ResponseError } from 'types/response';
import signInService from './../../services/authService';
import { useToasts } from 'react-toast-notifications';
//Types
import { ResponseCode } from 'types/response';
//Utils
import { format } from 'utils/formatErrorMessage';

export type AuthState = {
	user: CurrentUser;
	error: ResponseError;
	loadingIndicator: LoadingIndicator;
	token: string;
};

export type Credentials = {
	email: string;
	password: string;
};

export type AuthContextData = {
	currentUser?: CurrentUser;
	tryToSignIn(credentials: Credentials): void;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export type AuthProviderProps = {
	children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	//
	const [data, setData] = useState<AuthState>({} as AuthState);
	const { addToast } = useToasts();

	const tryToSignIn = useCallback(
		async ({ email, password }) => {
			//
			try {
				const response = await signInService({ email, password });

				const { access_token, claims, expires_in, userName } = response.data;
				const userClaims = JSON.parse(claims);
				const expirationDate = new Date(
					new Date().getTime() + parseInt(expires_in) * 1000 //? *1000 to converte in miliseconds
				);

				const currentUser = new CurrentUser(
					userClaims[0].value,
					Number(userClaims[1].value),
					Number(userClaims[2].value),
					userClaims[3].value,
					userName,
					true,
					expirationDate
				);

				localStorage.setItem('@@rtd-notifica:token', access_token);
				localStorage.setItem('@rtd-notifica:user', JSON.stringify(currentUser));

				setData({
					user: currentUser,
					error: { code: 0, message: '' },
					loadingIndicator: { isLoading: false, activityText: '' },
					token: access_token,
				});
			} catch (error) {
				const { code, message } = format(error.toString());
				addToast(message, { appearance: 'error' });
			}
		},
		[addToast]
	);
	return (
		<AuthContext.Provider value={{ currentUser: data?.user, tryToSignIn }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = (): AuthContextData => {
	const context = useContext(AuthContext);
	return context;
};

export { AuthProvider, useAuth };
