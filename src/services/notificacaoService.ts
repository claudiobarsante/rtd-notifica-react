import apiClient from './../api/client';

const getAllNotificacoesService = (oficioId: number) =>
	apiClient({
		method: 'get',
		url: `/notificacoes/${oficioId}`,
	});

export default getAllNotificacoesService;
