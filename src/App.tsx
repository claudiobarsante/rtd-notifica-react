import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';
import GlobalStyle from './styles/global';
import Routes from '../src/routes/index';
import Toast from './components/redux-toastr';
import { ModalProvider } from 'styled-react-modal';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<PersistGate persistor={persistor}>
				<Toast />
				<ModalProvider>
					<Routes />
				</ModalProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
