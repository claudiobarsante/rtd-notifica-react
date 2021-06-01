import { getAllNotificacoesService } from 'services/notificacaoService';
import { createContext, useCallback, useContext, useState } from 'react';
//Utils
import { ResponseError } from 'types/response';
import { Error } from 'erros/Error';

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
  todasNotificacoes: Notificacao[];
  error: ResponseError;
  //filteredNotificacoes: Notificacao[];
  isLoading: boolean;
  lastUpdate: Date;
};

const INITIAL_STATE: NotificacoesState = {
  todasNotificacoes: [],
  //filteredNotificacoes: [],
  error: { code: 0, message: '' },
  isLoading: false,
  lastUpdate: new Date()
};

export type NotificacoesContextData = {
  error: ResponseError;
  isLoading: boolean;
  todasNotificacoes: Notificacao[];
  getTodasNotificacoesByOficioId: (oficioId: number) => void;
  resetError: () => void;
};

export const NotificacoesContext = createContext<NotificacoesContextData>(
  {} as NotificacoesContextData
);

export type NotificacoesProviderProps = {
  children: React.ReactNode;
};

const NotificacoesProvider = ({ children }: NotificacoesProviderProps) => {
  const [data, setData] = useState<NotificacoesState>(INITIAL_STATE);

  const getTodasNotificacoesByOficioId = useCallback(
    async (oficioId: number) => {
      try {
        setData(data => ({ ...data, isLoading: true }));
        const response = await getAllNotificacoesService(oficioId);
        const notificacoes: Notificacao[] = JSON.parse(response.data);
        setData(data => ({ ...data, todasNotificacoes: notificacoes }));
      } catch (error) {
        console.log('hook', error);
        const { code, message } = Error.formatErrorMessage(error.toString());
        setData(data => ({ ...data, error: { code, message } }));
      }
      setData(data => ({ ...data, isLoading: false }));
    },
    []
  );

  const resetError = useCallback(() => {
    setData(data => ({ ...data, error: { code: 0, message: '' } }));
  }, []);
  return (
    <NotificacoesContext.Provider
      value={{
        isLoading: data.isLoading,
        error: data.error,
        todasNotificacoes: data.todasNotificacoes,
        getTodasNotificacoesByOficioId,
        resetError
      }}
    >
      {children}
    </NotificacoesContext.Provider>
  );
};

const useNotificacao = () => useContext(NotificacoesContext);

export { NotificacoesProvider, useNotificacao };
