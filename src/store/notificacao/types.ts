import { LoadingIndicator } from '../../types/commom';
import { ResponseError } from '../../types/response';

export type Notificacao = {
	bairro: string;
	diasEmAtraso: number;
	endereco: string;
	latitute: string;
	longitude: string;
	logradouro: string;
	nome: string;
	notificadoId: number;
	notificacaoId: number;
	numero: string;
	protocolo: string;
};

export type NotificacoesState = {
	all: Notificacao[];
	error: ResponseError;
	filteredNotificacoes: Notificacao[];
	loadingIndicator: LoadingIndicator;
	lastUpdate: Date;
};
