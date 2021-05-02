import GlobalStyle from './styles/global';
import Routes from '../src/routes/index';
import { ModalProvider } from 'styled-react-modal';
import { AuthProvider } from 'hooks/use-auth';
import { ToastProvider } from 'react-toast-notifications';

function App() {
	return (
		<>
			<ModalProvider>
				<GlobalStyle />
				<ToastProvider autoDismiss transitionDuration={400}>
					<AuthProvider>
						<Routes />
					</AuthProvider>
				</ToastProvider>
			</ModalProvider>
		</>
	);
}

export default App;
