import { AuthProvider } from 'hooks/use-auth';
import { NotificacoesProvider } from 'hooks/use-notificacao';

type Props = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => (
	<AuthProvider>
		<NotificacoesProvider>{children}</NotificacoesProvider>
	</AuthProvider>
);
