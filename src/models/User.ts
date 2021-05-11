export class CurrentUser {
	readonly nickname: string;
	readonly institucionalId: number;
	readonly oficioId: number;
	readonly userId: string;
	readonly userName: string;
	readonly expirationDate?: Date;
	readonly isAuthenticated: boolean;
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
