import { getAllNotificacoesService } from 'services/notificacaoService';
import { createContext, useCallback, useContext, useState } from 'react';
//Utils
import { format } from 'utils/formatErrorMessage';
import { ResponseError } from 'types/response';

export type Notificacao = {
	bairro: string;
	diasEmAtraso: number;
	endereco: string;
	latitute?: string;
	longitude?: string;
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
	//filteredNotificacoes: Notificacao[];
	isLoading: boolean;
	lastUpdate: Date;
};

const INITIAL_STATE: NotificacoesState = {
	all: [],
	//filteredNotificacoes: [],
	error: { code: 0, message: '' },
	isLoading: false,
	lastUpdate: new Date(),
};

export type NotificacoesContextData = {
	all: Notificacao[];
	isLoading: boolean;
	getAllByOficioId: (oficioId: number) => void;
};

export const NotificacoesContext = createContext<NotificacoesContextData>(
	{} as NotificacoesContextData
);

export type NotificacoesProviderProps = {
	children: React.ReactNode;
};

const NotificacoesProvider = ({ children }: NotificacoesProviderProps) => {
	const [data, setData] = useState<NotificacoesState>(INITIAL_STATE);

	const getAllByOficioId = useCallback(async (oficioId: number) => {
		try {
			setData(data => ({ ...data, isLoading: true }));
			const response = await getAllNotificacoesService(oficioId);
			const notificacoes: Notificacao[] = JSON.parse(response.data);
			setData(data => ({ ...data, all: notificacoes }));
		} catch (error) {
			const { code, message } = format(error.toString());
			setData(data => ({ ...data, error: { code, message } }));
		}
		setData(data => ({ ...data, isLoading: false }));
	}, []);

	return (
		<NotificacoesContext.Provider
			value={{ isLoading: data.isLoading, all: data.all, getAllByOficioId }}
		>
			{children}
		</NotificacoesContext.Provider>
	);
};

const useNotificacao = () => useContext(NotificacoesContext);

export { NotificacoesProvider, useNotificacao };
