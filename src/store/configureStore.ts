import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import { AuthState } from './auth/types';
import logger from 'redux-logger';
import { NotificacoesState } from './notificacao/types';

export type State = {
	auth: AuthState;
	notificacoes: NotificacoesState;
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
