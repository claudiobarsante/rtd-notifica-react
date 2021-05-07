import { CurrentUser } from 'models/User';
import { createContext, useContext, useState, useCallback } from 'react';
import { ResponseError } from 'types/response';
import signInService from './../../services/authService';
import { toast, Slide } from 'react-toastify';
import axios from 'axios';
//Utils
import { format } from 'utils/formatErrorMessage';
import apiClient from 'api/client';

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
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export type AuthProviderProps = {
	children: React.ReactNode;
};

const USER_KEY = '@rtd-notifica:user';
export const TOKEN_KEY = '@rtd-notifica:token';

const INITIAL_STATE: AuthState = {
	user: {
		nickname: '',
		institucionalId: 0,
		oficioId: 0,
		userId: '',
		userName: '',
		isAuthenticated: false,
		expirationDate: new Date('2021-01-01'),
	},
	error: { code: 0, message: '' },
	token: '',
	isLoading: false,
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	//
	const [data, setData] = useState<AuthState>(INITIAL_STATE);

	const tryToSignIn = useCallback(
		async ({ email, password }) => {
			//
			try {
				setData(data => ({ ...data, isLoading: true }));

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

				setData(data => ({ ...data, user: currentUser, token: access_token }));
			} catch (error) {
				const { message } = format(error.toString());

				toast.error(`🙍‍♂️ ${message}`, {
					transition: Slide,
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			}
			setData(data => ({ ...data, isLoading: false }));
		},

		[]
	);

	return (
		<AuthContext.Provider
			value={{
				currentUser: data.user,
				isLoading: data.isLoading,
				tryToSignIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
