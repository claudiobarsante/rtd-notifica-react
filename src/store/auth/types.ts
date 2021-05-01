import { ResponseError } from '../../types/response';
import { LoadingIndicator } from '../../types/commom';

//AuthState
export type User = {
	apelido: string;
	institucionalId: number;
	oficioId: number;
	userId: string;
	userName: string;
};
export type AuthState = {
	currentUser: User;
	error: ResponseError;
	expirationDate?: Date;
	isAuthenticated: boolean;
	loadingIndicator: LoadingIndicator;
	token: string;
};

//Credentials
export type Credentials = {
	email: string;
	password: string;
};
