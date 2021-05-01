import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './auth/reducer';
import notificacoesReducer from './notificacao/reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const persistConfig = {
	key: '@rtdnotifica',
	storage,
	whitelist: ['auth'],
};

const rootReducer = combineReducers({
	auth: authReducer,
	notificacoes: notificacoesReducer,
	toastr: toastrReducer,
});

export default persistReducer(persistConfig, rootReducer);
