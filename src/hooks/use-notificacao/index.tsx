import { getAllNotificacoesService } from 'services/notificacaoService';
import { createContext, useCallback, useContext, useState } from 'react';
//Utils
import { format } from 'utils/formatErrorMessage';

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
	//error: ResponseError;
	//filteredNotificacoes: Notificacao[];
	isLoading: boolean;
	lastUpdate: Date;
};

export type NotificacoesContextData = {
	//all: Notificacao[];
	isLoading: boolean;
	getAllByOficioId: (oficioId: number) => Promise<Notificacao[]>;
};

export const NotificacoesContext = createContext<NotificacoesContextData>(
	{} as NotificacoesContextData
);

export type NotificacoesProviderProps = {
	children: React.ReactNode;
};

const NotificacoesProvider = ({ children }: NotificacoesProviderProps) => {
	const [data, setData] = useState<NotificacoesState>({} as NotificacoesState);

	const getAllByOficioId = useCallback(
		async (oficioId: number) => {
			let result: Notificacao[] = [];
			try {
				setData({ ...data, isLoading: true });
				const response = await getAllNotificacoesService(oficioId);
				const notificacoes: Notificacao[] = JSON.parse(response.data);
				result = notificacoes;
			} catch (error) {
				const { message } = format(error.toString());
				console.log('message error: ' + message);
			}
			setData({ ...data, isLoading: true });
			return result;
		},
		[data]
	);

	return (
		<NotificacoesContext.Provider value={{ isLoading: data.isLoading, getAllByOficioId }}>
			{children}
		</NotificacoesContext.Provider>
	);
};

const useNotificacao = () => useContext(NotificacoesContext);

export { NotificacoesProvider, useNotificacao };
