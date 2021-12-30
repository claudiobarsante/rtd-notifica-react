import { AuthProvider } from 'hooks/useAuth';
import { NotificacoesProvider } from 'hooks/use-Notificacao';
import { ErrorProvider } from 'hooks/useError';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => (
  <ErrorProvider>
    <AuthProvider>
      <NotificacoesProvider>{children}</NotificacoesProvider>
    </AuthProvider>
  </ErrorProvider>
);
