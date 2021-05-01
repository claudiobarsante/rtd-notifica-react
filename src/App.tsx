import GlobalStyle from './styles/global';
import Routes from '../src/routes/index';
import { ModalProvider } from 'styled-react-modal';
import { AuthProvider } from 'hooks/use-auth';

function App() {
	return (
		<>
			<ModalProvider>
				<GlobalStyle />
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</ModalProvider>
		</>
	);
}

export default App;
