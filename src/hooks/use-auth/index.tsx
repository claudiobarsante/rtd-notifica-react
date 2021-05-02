import { CurrentUser } from 'models/User';
import { createContext, useContext, useState, useCallback } from 'react';
import { LoadingIndicator } from 'types/commom';
import { ResponseError } from 'types/response';
import signInService from './../../services/authService';
import { useToasts } from 'react-toast-notifications';

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
	currentUser: CurrentUser;
	tryToSignIn(credentials: Credentials): void;
	setUser(currentUser: Test): void;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export type AuthProviderProps = {
	children: React.ReactNode;
};

export type Test = {
	user: CurrentUser;
	token: string;
};

const USER_KEY = '@rtd-notifica:user';
const TOKEN_KEY = '@rtd-notifica:token';

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

				// setData({
				// 	user: currentUser,
				// 	error: { code: 0, message: '' },
				// 	loadingIndicator: { isLoading: false, activityText: '' },
				// 	token: access_token,
				// });

				setUser({
					user: currentUser,
					token: access_token,
				});
			} catch (error) {
				const { message } = format(error.toString());
				addToast(message, {
					appearance: 'error',
				});
			}
		},
		[addToast]
	);

	const setUser = (obj: Test) => {
		setData({
			user: obj.user,
			error: { code: 0, message: '' },
			loadingIndicator: { isLoading: false, activityText: '' },
			token: obj.token,
		});
	};

	return (
		<AuthContext.Provider value={{ currentUser: data.user, tryToSignIn, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
