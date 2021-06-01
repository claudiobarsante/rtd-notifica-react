import { AuthProvider } from 'hooks/use-auth';
import { NotificacoesProvider } from 'hooks/use-notificacao';
import { ErrorProvider } from 'hooks/use-Error';

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
