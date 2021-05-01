export class CurrentUser {
	nickname: string;
	institucionalId: number;
	oficioId: number;
	userId: string;
	userName: string;
	expirationDate?: Date;
	isAuthenticated: boolean;
	constructor(
		nickname: string,
		institucionalId: number,
		oficioId: number,
		userId: string,
		userName: string,
		isAuthenticated: boolean,
		expirationDate?: Date
	) {
		this.nickname = nickname;
		this.institucionalId = institucionalId;
		this.oficioId = oficioId;
		this.userId = userId;
		this.userName = userName;
		this.isAuthenticated = isAuthenticated;
		this.expirationDate = expirationDate;
	}
}
