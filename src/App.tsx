import { ModalProvider } from 'styled-react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
//Components
import { AppProvider } from 'hooks';
import Routes from 'routes';
//Styles
import GlobalStyle from 'styles/global';

function App() {
	return (
		<>
			<ModalProvider>
				<GlobalStyle />
				<ToastContainer />
				<AppProvider>
					<Routes />
				</AppProvider>
			</ModalProvider>
		</>
	);
}

export default App;
