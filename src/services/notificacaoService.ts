import apiClient from 'api/client';

export const getAllNotificacoesService = (oficioId: number) =>
	apiClient({
		method: 'get',
		url: `/notificacoes/${oficioId}`,
	});
