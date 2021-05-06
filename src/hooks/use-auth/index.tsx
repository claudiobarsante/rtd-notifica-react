import { CurrentUser } from 'models/User';
import { createContext, useContext, useState, useCallback } from 'react';
import { ResponseError } from 'types/response';
import signInService from './../../services/authService';
import { useToasts } from 'react-toast-notifications';

//Utils
import { format } from 'utils/formatErrorMessage';

export type AuthState = {
	user: CurrentUser;
	error: ResponseError;
	token: string;
	isLoading: boolean;
};

export type Credentials = {
	email: string;
	password: string;
};

export type UserInfo = {
	user: CurrentUser;
	token: string;
};

export type AuthContextData = {
	currentUser: CurrentUser;
	isLoading: boolean;
	tryToSignIn: (credentials: Credentials) => void;
	setCurrentUser: (currentUser: UserInfo) => void;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export type AuthProviderProps = {
	children: React.ReactNode;
};

const USER_KEY = '@rtd-notifica:user';
export const TOKEN_KEY = '@rtd-notifica:token';

const AuthProvider = ({ children }: AuthProviderProps) => {
	//
	const [data, setData] = useState<AuthState>({} as AuthState);
	const { addToast } = useToasts();

	const setCurrentUser = useCallback(
		(info: UserInfo) => {
			setData({ ...data, user: info.user, error: { code: 0, message: '' }, token: info.token });
		},
		[data]
	);

	const tryToSignIn = useCallback(
		async ({ email, password }) => {
			//
			try {
				setData({ ...data, isLoading: true });
				console.log('data ', data);
				const response = await signInService({ email, password });
				console.log('response auth', response.data);
				const { access_token, claims, expires_in, userName } = response.data;
				const userClaims = JSON.parse(claims);
				const expirationDate = new Date(
					new Date().getTime() + parseInt(expires_in) * 1000 //? *1000 to convert in miliseconds
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

				localStorage.setItem(TOKEN_KEY, access_token);
				localStorage.setItem(USER_KEY, JSON.stringify(currentUser));

				setCurrentUser({
					user: currentUser,
					token: access_token,
				});
			} catch (error) {
				const { message } = format(error.toString());
				addToast(message, {
					appearance: 'error',
				});
			}
			setData({ ...data, isLoading: false });
		},

		[addToast, data, setCurrentUser]
	);

	return (
		<AuthContext.Provider
			value={{
				currentUser: data.user,
				isLoading: data.isLoading,
				tryToSignIn,
				setCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
