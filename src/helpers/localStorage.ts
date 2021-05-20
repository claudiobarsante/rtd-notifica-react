/*O redux-persist ao gravar no local storage  grava com a key='pesist:root' e o valor
é um objeto com 2 chaves. Uma com o nome do reducer, no caso aqui auth e a outra 
persist(controle interno dele)
E dentro da chave auth tem uma outra chave com o mesmo nome, por isso q tenho q usar o parse 2x. Uma
p o bojeto principal e a segunda para o bojeto q está dentro  */
type Authentication = {
	isAuthenticated: boolean;
	token: string;
};

export const getAuthenticationFromLocalStorage = (): Authentication => {
	//to avoid typescript error
	const temp = localStorage.getItem('persist:@rtdnotifica');
	const auth = temp ? JSON.parse(temp) : {};
	//
	const { isAuthenticated, token } = JSON.parse(auth.auth);

	console.log('get authentication ', token, isAuthenticated);

	return { isAuthenticated, token };
};
